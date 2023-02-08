import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import * as Styled from './styles';

export default function Achievement() {
  return (
    <Styled.Container>
      <SvgCard
        alt="Achievement percentage"
        src="assets/achievement/percentage.svg"
      />
      <Styled.MessageContainer>
        <TextCard>Good Result!</TextCard>
        <TextCard as='p'>Share your achievement with your friend</TextCard>
      </Styled.MessageContainer>
    </Styled.Container>
  );
}
