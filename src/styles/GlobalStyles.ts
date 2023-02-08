import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      font-family: ${theme.font.family.default};
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      display: flex;
      justify-content: center;
      position: relative;
    }

    body {
      background: ${theme.colors.primaryColor};
      color: ${theme.font.color.primaryColor};
      font-family: ${theme.font.family.default};
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.xlarge} ${theme.spacings.medium};
      position: absolute;
      width: 100%;

      @media screen and (min-width: 768px) {
        width: 50%;
      }
    }

    h1, h2, h3, h4, h5, h6 {
      margin: ${theme.spacings.medium} 0;
    }

    p {
      margin: ${theme.spacings.small} 0;
    }

    button {
      cursor: pointer;
    }
  `}
`;
