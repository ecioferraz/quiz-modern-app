import styled, { css } from 'styled-components';
import RadioInputProps from './RadioInput.props';

export const Container = styled.section<{ answer: RadioInputProps['answer'] }>`
  ${({ answer, theme }) => css`
    align-items: center;
    background: ${answer === 'wrong' && '#F6E5E5'};
    border: ${answer === 'correct' && '1px solid #219653'};
    border-radius: 10px;
    box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.05);
    display: flex;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
    padding: ${theme.spacings.small};

    img {
      width: ${theme.spacings.medium};
    }

    p {
      font-size: 1.4rem;
      font-weight: ${theme.font.weight.medium};
      margin: 0;
    }
  `}
`;
