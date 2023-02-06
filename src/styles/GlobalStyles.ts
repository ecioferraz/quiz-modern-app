import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      font-family: ${theme.font.family.default};
      margin: 0;
      padding: 0;
      transition: 0.8s all ease-in-out;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background: ${theme.colors.primaryColor};
      color: ${theme.font.color.primaryColor};
      font-family: ${theme.font.family.default};
      font-size: ${theme.font.sizes.small};
    }

    main {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30rem;
      height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: ${theme.spacings.medium} 0;
    }

    p {
      margin: ${theme.spacings.small} 0;
    }
  `}
`;
