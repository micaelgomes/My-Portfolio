import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F2F2F2;
    color: #262626;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    transition: .2s background-color ease-in-out;
  }

  body, input, button {
    font-family: 'Lato', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2.25em;
  }
  h3 {
    font-size: 1.625em;
  }
  h4 {
    font-size: 1.375em;
  }
  h5 {
    font-size: 1.25em;
  }
  h6 {
    font-size: 1.125em;
  }
  p {
    font-size: 1em;
    font-weight: normal;
    line-height: 1.8;
  }

  button {
    cursor: pointer;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;
