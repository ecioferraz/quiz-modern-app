import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    h1 {
      color: ${theme.font.color.tertiaryColor};
      font-weight: ${theme.font.weight.semiBold};
      margin: 3.2rem 0 1.6rem 0;
    }
  `}
`;

export const PopularQuizContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    background: #FFFFFF;
    box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.03);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacings.small} 0;

    > * {
      margin: ${theme.spacings.small};
      margin-right: 1.9rem;
    }
  `}
`;

export const CategoryContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: 1.6rem;

    > section:has(img) {
      align-items: center;
      border-radius: 10px;
      box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.05);
      display: flex;
      height: 50px;
      justify-content: center;
      width: 50px;
    }
  `}
`;

export const CategoryDescriptionContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h2, p {
      margin: 0;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: ${theme.font.weight.semiBold};
    }

    p {
      color: ${theme.font.color.tertiaryColor};
      font-size: 1.2rem;
      font-weight: ${theme.font.weight.regular};
    }
  `}
`;

export const RatingContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    gap: 0.6rem;
  `}
`;