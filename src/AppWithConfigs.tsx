import { StyleProvider } from '@ant-design/cssinjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import React from 'react';
import App from './App';

const theme = {
  token: {
    colorPrimary: '#8b5cf6',
    colorInfo: '#8b5cf6',
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const AppWithConfigs = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <StyleProvider hashPriority="high">
          <App />
        </StyleProvider>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppWithConfigs;
