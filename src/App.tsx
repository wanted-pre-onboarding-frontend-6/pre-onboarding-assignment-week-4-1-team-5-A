import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from 'libs/styles/theme';
import GlobalStyles from 'libs/styles/global';
import { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Routes from 'router';
import TokenRepository from 'repository/TokenRepository';
import LayoutHeader from 'components/Layout/header/Header';
import FullLayout from 'container/FullLayout/Layout';

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

function App() {
  // history back refresh page
  useEffect(() => {
    window.onpopstate = () => {
      window.location.reload();
    };
  }, []);

  const isAuth = TokenRepository.getToken() ? true : false;
  const routes = useRoutes(Routes(isAuth));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<FullLayout />}>{routes}</Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
