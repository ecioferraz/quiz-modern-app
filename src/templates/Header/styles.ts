import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.large};
    margin-top: ${theme.spacings.xlarge};
    width: 100%;

    img {
      height: ${theme.spacings.medium};
      width: ${theme.spacings.medium};
    }
  `}
`;

export const TitleContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;

    h1 {
      margin: 0 3.2rem;
      font-weight: ${theme.font.weight.semiBold};
    }
  `}
`;
