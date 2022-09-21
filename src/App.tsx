import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from 'libs/styles/global';
import { RecoilRoot } from 'recoil';
import Routing from 'router/Routing';

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
        <GlobalStyles />
        <Routing />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
