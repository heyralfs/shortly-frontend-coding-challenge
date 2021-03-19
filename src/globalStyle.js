import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  :root {
    --teste: #ff7700;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary.DarkViolet};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${({ theme }) => theme.colors.neutral.GrayishViolet};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
  button:hover,
  button:focus {
    outline: none;
  }

  .btn {
    color: #fff;
    text-transform: capitalize;
    background: ${({ theme }) => theme.colors.primary.Cyan};
    border-radius: 1rem;
  }

  #root {
    width: 100vw;
  }

  .container {
    width: 100%;
    max-width: 1100px;
    margin: auto;
  }
`;

export default GlobalStyle;
