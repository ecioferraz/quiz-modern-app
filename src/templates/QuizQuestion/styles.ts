import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${({ theme }) => css`
    h1 {
      font-weight: ${theme.font.weight.semiBold};
      margin-right: ${theme.spacings.huge};
    }

    img {
      margin-bottom: ${theme.spacings.xsmall};
      width: 100%;
    }
  `}
`;

export const ButtonsContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 5.8rem;

    button {
      font-size: 1.4rem;
      font-weight: ${theme.font.weight.semiBold};
      width: 48%;

      :first-child {
        background: #FAFAFA;
        border: 1px solid #21BDCA;
        color: #21BDCA;
      }

      :last-child {
        background: #21BDCA;
        color: #FFF;
      }
    }
  `}
`;
