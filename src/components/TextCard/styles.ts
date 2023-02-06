import styled, { css, DefaultTheme } from 'styled-components';
import TextCardProps from './TextCard.props';

const textSize = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaFont(theme)};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
`,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.width.lteMedium} {
    font-size: ${theme.font.sizes.xxlarge};
  }
`;

export const Container = styled.h1<Pick<TextCardProps, 'size'>>`
  ${({ size = 'huge', theme }) => css`
    ${textSize[size](theme)};
  `}
`;
