import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterConfig from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>
);