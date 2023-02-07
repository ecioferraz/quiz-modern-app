import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    h1 {
      color: ${theme.font.color.tertiaryColor};
      font-weight: ${theme.font.weight.semiBold};
      margin: 3.2rem 0 1.6rem 0;
    }

    a {
      color: ${theme.font.color.heroColor};
      text-decoration: none;
    }
  `}
`;
