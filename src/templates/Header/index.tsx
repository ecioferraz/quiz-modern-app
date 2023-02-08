import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import HeaderProps from './Header.props';
import * as Styled from './styles';

export default function Header({ alt, iconSrc, time, title }: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <SvgCard alt="Go back" src="assets/icons/back-arrow.svg" />
        <TextCard>{title}</TextCard>
      </Styled.TitleContainer>
      <SvgCard alt={alt} background="#E1F1F2" src={iconSrc} time={time} />
    </Styled.Container>
  );
}
