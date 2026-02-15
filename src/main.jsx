import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Analytics } from "@vercel/analytics/react"
import { WindowManagerProvider } from './components/WindowManagerContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Analytics />
    <WindowManagerProvider>
      <App />
    </WindowManagerProvider>
  </React.StrictMode>
);
