import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import React from 'react';
import App from './App';

const theme = {
  token: {
    colorPrimary: '#00a5bd',
    colorInfo: '#00a5bd',
  },
};

const AppWithConfigs = () => {
  return (
    <ConfigProvider theme={theme}>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </ConfigProvider>
  );
};

export default AppWithConfigs;
