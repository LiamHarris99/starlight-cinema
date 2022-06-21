import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, ScopedCssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <Provider store={store}>
            <App />
          </Provider>
        </ScopedCssBaseline>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
