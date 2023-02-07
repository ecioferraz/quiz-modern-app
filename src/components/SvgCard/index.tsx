import SvgCardProps from './SvgCard.props';
import * as Styled from './styles';

export default function SvgCard({ alt, src }: SvgCardProps) {
  return (
    <Styled.Container>
      <img alt={alt} src={src} />
    </Styled.Container>
  );
}
