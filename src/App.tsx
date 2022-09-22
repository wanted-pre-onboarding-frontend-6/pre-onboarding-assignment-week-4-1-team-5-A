import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from 'libs/styles/global';
import { RecoilRoot } from 'recoil';
import Routing from 'router/Routing';
import { ThemeProvider } from 'styled-components';
import theme from 'libs/styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 30 * 1000,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routing />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
