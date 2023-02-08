import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    align-items: center;
    background: url('../../assets/images/achievement-bg.png') no-repeat;
    background-size: 100%;
    border-radius: 10px;
    box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.03);
    display: flex;
    margin: 3.4rem 0 ${theme.spacings.large};
    width: 100%;

    section:has(img) {
      margin: ${theme.spacings.small};
    }
  `}
`;

export const MessageContainer = styled.section`
  ${({ theme }) => css`
    margin-right: 7.8rem;

    h1, p {
      margin: 0.8rem;
    }

    p {
      color: ${theme.font.color.quaternary};
      font-size: 1.2rem;
    }
  `}
`;
