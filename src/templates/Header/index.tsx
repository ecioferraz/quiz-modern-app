import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <SvgCard alt="Go back" src="assets/icons/back-arrow.svg" />
        <TextCard>Detail Quiz</TextCard>
      </Styled.TitleContainer>
      <SvgCard alt="More options" src="assets/icons/config-dots.svg" />
    </Styled.Container>
  );
}
