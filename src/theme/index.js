import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import PrimeReact from 'primereact/utils';
import { createGlobalStyle } from 'styled-components';

PrimeReact.ripple = true;

export const GlobalStyle = createGlobalStyle`

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${(p) => p.theme.globalFont};
    color: ${(p) => p.theme.black};
    background-color: ${(p) => p.theme.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const color = {
  white: '#fff',
  milk: '#fbfcff',
  gray: '#888',
  dark: '#17212F',
  dark2: '#1F2E3F',
  dark3: '#304562',
};

export const font = {
  globalFont:
    "'Microsoft JhengHei', 'Segoe UI', Helvetica, Arial, Helvetica, sans-serif;",
};

export const screen = {
  screenXs: '480px',
  screenSm: '576px',
  screenMd: '768px',
  screenLg: '992px',
  screenXl: '1200px',
};

export default {
  ...color,
  ...font,
  ...screen,
};
