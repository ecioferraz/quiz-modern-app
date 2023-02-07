import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import CategoryCard from '../CategoryCard';
import CategoryCardProps from '../CategoryCard/CategoryCard.props';
import * as Styled from './styles';

export default function PopularQuiz() {
  const popularQuizCards: CategoryCardProps[] = [
    {
      background: '#FFE3BE',
      category: 'Technology',
      iconSrc: 'assets/icons/desktop.svg',
    },
    {
      background: '#EAEEFF',
      category: 'Sport',
      iconSrc: 'assets/icons/ball.svg',
    },
    {
      background: '#F6E5E5',
      category: 'Music',
      iconSrc: 'assets/icons/music.svg',
    },
  ];

  return (
    <Styled.Container>
      <TextCard size="small">Popular Quiz</TextCard>
      {popularQuizCards.map(({ background, category, iconSrc }) => (
        <CategoryCard
          background={background}
          category={category}
          iconSrc={iconSrc}
          key={category}
          rating
        />
      ))}
    </Styled.Container>
  );
}
