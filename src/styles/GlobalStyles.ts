import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #FA0969;
    --secondary: #30BCED;
    --tertiary: #303036;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    color: var(--tertiary);
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
  a.baseLink {
    text-decoration: none;
  }
  ul { list-style: none }
`;
