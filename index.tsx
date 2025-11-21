
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './src/pages/Dashboard';
import GeneratedPage from './src/pages/GeneratedPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="ai-page" element={<GeneratedPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
