import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthService } from 'apis';
import theme from 'libs/styles/theme';
import AccountListPage from 'pages/accountList';
import LoginPage from 'pages/login';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import TokenRepository from 'repository/TokenRepository';
import { ThemeProvider } from 'styled-components';
import { navigate } from '@reach/router';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 30 * 1000,
    },
  },
});

describe('로그인 후 페이지 이동', () => {
  test('로그인 인증 테스트', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/accounts/account-list" element={<AccountListPage />} />
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const $emailInput = screen.getByPlaceholderText('아이디를 입력하세요');
    const $passwordInput = screen.getByPlaceholderText('비밀번호를 입력하세요');
    const $loginButton = screen.getByText('LOGIN');

    userEvent.type($emailInput, 'test@test.com');
    userEvent.type($passwordInput, 'test');
    userEvent.click($loginButton);

    await waitFor(
      async () => {
        await AuthService.login({ data: { email: 'test@test.com', password: 'test' } }).then(
          (res) => {
            const { accessToken } = res.data;
            TokenRepository.setToken(accessToken);
            if (TokenRepository.getToken()) {
              navigate('/accounts/account-list');
              expect(window.location.pathname).toEqual('/accounts/account-list');
            }
          },
        );
      },
      { timeout: 8000 },
    );
  });
});
