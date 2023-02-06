import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    height: ${theme.spacings.xxlarge};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;
