import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import HeroHeaderProps from './HeroHeader.props';
import * as Styled from './styles';

export default function HeroHeader({ username }: HeroHeaderProps) {
  return (
    <Styled.Container>
      <section>
        <SvgCard alt={`${username} hero`} src="assets/hero/hero.svg" />
        <section>
          <TextCard size='small'>Hello, </TextCard>
          <TextCard size='small'>{username}</TextCard>
        </section>
      </section>
      <SvgCard alt='Notifications' src='assets/icons/bell.svg' />
    </Styled.Container>
  );
}
