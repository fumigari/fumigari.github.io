import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShowSidebarProvider } from './hooks/ShowSidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowSidebarProvider>
      <App />
    </ShowSidebarProvider>
  </React.StrictMode>
);

