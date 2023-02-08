import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    h1 {
      font-weight: ${theme.font.weight.semiBold};
    }

    section:has(> img) {
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
  `}
`;
