import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: #181818;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyle;
