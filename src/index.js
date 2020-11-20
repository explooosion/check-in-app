import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store';
import theme, { GlobalStyle } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
