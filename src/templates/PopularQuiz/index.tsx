import TextCard from '../../components/TextCard';
import CategoryCard from '../CategoryCard';
import CategoryCardProps from '../CategoryCard/CategoryCard.props';
import * as Styled from './styles';

export default function PopularQuiz() {
  const popularQuizCards: CategoryCardProps[] = [
    {
      background: '#FFE3BE',
      description: '10 Questions',
      iconSrc: 'assets/icons/desktop.svg',
      title: 'Technology',
    },
    {
      background: '#EAEEFF',
      description: '10 Questions',
      iconSrc: 'assets/icons/ball.svg',
      title: 'Sport',
    },
    {
      background: '#F6E5E5',
      description: '10 Questions',
      iconSrc: 'assets/icons/music.svg',
      title: 'Music',
    },
  ];

  return (
    <Styled.Container>
      <TextCard size="small">Popular Quiz</TextCard>
      {popularQuizCards.map(({ background, description, iconSrc, title }) => (
        <CategoryCard
          background={background}
          description={description}
          iconSrc={iconSrc}
          key={title}
          rating
          title={title}
        />
      ))}
    </Styled.Container>
  );
}
