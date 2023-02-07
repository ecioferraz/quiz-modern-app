import SvgCardProps from './SvgCard.props';
import * as Styled from './styles';

export default function SvgCard({ alt, background = '', src }: SvgCardProps) {
  return (
    <Styled.Container background={background}>
      <img alt={alt} src={src} />
    </Styled.Container>
  );
}
