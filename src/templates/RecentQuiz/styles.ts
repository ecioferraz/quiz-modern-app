import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    h1 {
      color: ${theme.font.color.tertiaryColor};
      font-weight: ${theme.font.weight.semiBold};
    }
    
    margin: 1.6rem 0;
  `}
`;

export const CardsContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `}
`;

export const RecentQuizCardContainer = styled.section`
  ${({ theme }) => css`
    background: #FAFAFD;
    border-radius: 10px;
    width: 47%;
    
    > * {
      margin: 1.6rem;
    }

    section:has(img) {
      align-items: center;
      background: #FFFFFF;
      border-radius: 10px;
      box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.05);
      display: flex;
      height: 40px;
      justify-content: center;
      width: 40px;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: ${theme.font.weight.semiBold};
    }

    p {
      color: ${theme.font.color.tertiaryColor};
      font-family: ${theme.font.family.secondaryFont};
      font-size: 1.2rem;
      font-weight: ${theme.font.weight.regular};
    }
  `}
`;
