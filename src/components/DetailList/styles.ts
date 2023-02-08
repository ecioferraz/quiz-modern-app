import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    font-size: 1.4rem;
    padding-left: 1.6rem;

    li {
      color: ${theme.font.color.secondaryColor};
      font-family: ${theme.font.family.secondaryFont};
      margin: 2.4rem 0;

      ::marker {
        color: ${theme.font.color.primaryColor};
      }

      :last-child {
        margin-bottom: 0;
      }
    }
  `}
`;
