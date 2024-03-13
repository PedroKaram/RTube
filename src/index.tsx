import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import { router } from './routes/Routes';
import App from './App';

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <MantineProvider defaultColorScheme='dark'>
        <React.StrictMode>

          <App />

        </React.StrictMode>
      </MantineProvider>
    </BrowserRouter>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
} else {
  console.error("Root element with id 'root' not found.");
}
