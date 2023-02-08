import styled, { css } from 'styled-components';
import ProgressBarProps from './ProgressBar.props';

export const Container = styled.div`
  ${({ theme }) => css`
    background: #F2F2F2;
    border-radius: 10rem;
    height: 0.6rem;
  `}
`;

export const InnerContainer = styled.div<ProgressBarProps>`
  ${({ background, theme, width }) => css`
    background: ${background};
    border-radius: 10rem;
    height: 0.6rem;
    width: ${width}%;
  `}
`;
