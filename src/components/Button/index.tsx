import ButtonProps from './Button.props';
import * as Styled from './styles';

export default function Button({ children }: ButtonProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
