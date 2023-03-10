import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithConfigs from './App/AppWithConfigs';
import 'antd/dist/reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWithConfigs />
  </React.StrictMode>,
);
