import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme/index.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store.ts';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
