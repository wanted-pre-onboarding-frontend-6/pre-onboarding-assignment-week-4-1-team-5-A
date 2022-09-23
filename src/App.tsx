import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from 'libs/styles/theme';
import GlobalStyles from 'libs/styles/global';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { PRIVATE_PATH } from 'router/Path/PrivatePath';
import { PUBLIC_PATH } from 'router/Path/PublicPath';

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
  // history back refresh page
  useEffect(() => {
    window.onpopstate = () => {
      window.location.reload();
    };
  }, []);

  const routes = useRoutes([...PRIVATE_PATH, ...PUBLIC_PATH]);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {routes}
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
