import IconCardProps from './IconCard.props';
import * as Styled from './styles';

export default function IconCard({ alt, src }: IconCardProps) {
  return (
    <Styled.Container>
      <img alt={alt} src={src} />
    </Styled.Container>
  );
}
