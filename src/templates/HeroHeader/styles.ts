import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: ${theme.spacings.xlarge};
    margin-top: 4.1rem;

    img {
      height: ${theme.spacings.medium};
    }
  `}
`;

export const HeroContainer = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    
    img {
      height: ${theme.spacings.xlarge};
    }
  `}
`;

export const GreetingContainer = styled.section`
${({ theme }) => css`
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
`}
`;
