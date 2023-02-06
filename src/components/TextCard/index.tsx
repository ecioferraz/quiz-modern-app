import TextCardProps from './TextCard.props';
import * as Styled from './styles';

export default function TextCard({
  as = 'h1',
  children,
  size = 'huge',
}: TextCardProps) {
  return (
    <Styled.Container as={as} size={size}>
      {children}
    </Styled.Container>
  );
}
