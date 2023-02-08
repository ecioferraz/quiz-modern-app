import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.large};
    width: 100%;

    img {
      height: ${theme.spacings.medium};
      width: ${theme.spacings.medium};
    }

    section:has(span) {
      align-items: center;
      display: flex;
      gap: 0.3rem;
      border-radius: 16px;
      height: 2.2rem;
      width: 7rem;
      
      img {
        height: ${theme.spacings.small};
        width: ${theme.spacings.small};
      }
      
      span {
        color: #21BDCA;
        font-family: ${theme.font.family.secondaryFont};
        font-size: 1.2rem;
        font-weight: ${theme.font.weight.regular};
      }
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
