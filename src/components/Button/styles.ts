import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: ${theme.font.weight.semiBold};
    height: ${theme.spacings.xxlarge};
    font-weight: ${theme.font.weight.semiBold};
    width: 100%;
  `}
`;
