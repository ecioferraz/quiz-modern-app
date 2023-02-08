import styled, { css } from 'styled-components';

export const Container = styled.section<{ background: string }>`
  ${({ background = '', theme }) => css`
    align-items: center;
    background: ${background};
    display: flex;
    justify-content: center;
  `}
`;
