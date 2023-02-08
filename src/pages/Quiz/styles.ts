import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css``}
`;

export const ProgressContainer = styled.section`
  ${({ theme }) => css`
    p {
      color: ${theme.font.color.tertiaryColor};
      font-family: ${theme.font.family.secondaryFont};
      font-size: 1.4rem;
      font-weight: ${theme.font.weight.regular};
    }
  `}
`;
