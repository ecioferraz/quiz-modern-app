import styled, { css } from 'styled-components';

export const Container = styled.section<{ background: string }>`
  ${({ background = '', theme }) => css`
    background: ${background}
  `}
`;
