import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: ${theme.spacings.xlarge};

    section:has(h1) {
      align-items: center;
      display: flex;
      
      img {
        height: ${theme.spacings.xlarge};
      }

      > section {
        align-items: center;
        display: flex;
        justify-content: center;
        
        h1 {
          font-weight: ${theme.font.weight.semiBold};
          margin-right: 0.3rem;
        }
        
        h1:first-child {
          color: ${theme.font.color.tertiaryColor};
          font-weight: ${theme.font.weight.medium};
          margin-left: ${theme.spacings.small};
        }
      }
    }

    img {
      height: ${theme.spacings.medium};
    }
  `}
`;
