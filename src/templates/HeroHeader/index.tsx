import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import HeroHeaderProps from './HeroHeader.props';
import * as Styled from './styles';

export default function HeroHeader({ username }: HeroHeaderProps) {
  return (
    <Styled.Container>
      <Styled.HeroContainer>
        <SvgCard alt={`${username} hero`} src="assets/hero/hero.svg" />
        <Styled.GreetingContainer>
          <TextCard size='small'>Hello, </TextCard>
          <TextCard size='small'>{username}</TextCard>
        </Styled.GreetingContainer>
      </Styled.HeroContainer>
      <SvgCard alt='Notifications' src='assets/icons/bell.svg' />
    </Styled.Container>
  );
}
