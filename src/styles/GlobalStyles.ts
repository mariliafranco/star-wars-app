import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// font-size 16px (Desktop)
html {
  font-size: 62.5%
}

body {
  background: #fff;
  -webkit-font-smoothing: antialiased;
}


`;
