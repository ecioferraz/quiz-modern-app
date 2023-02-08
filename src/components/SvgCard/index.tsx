import SvgCardProps from './SvgCard.props';
import TextCard from '../TextCard';
import * as Styled from './styles';

export default function SvgCard({
  alt,
  background = '',
  src,
  time,
}: SvgCardProps) {
  return (
    <Styled.Container background={background}>
      <img alt={alt} src={src} />
      {time && <TextCard as="span">{time}</TextCard>}
    </Styled.Container>
  );
}
