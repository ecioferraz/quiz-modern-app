import DetailList from '../../components/DetailList';
import TextCard from '../../components/TextCard';
import CategoryCard from '../CategoryCard';
import CategoryCardProps from '../CategoryCard/CategoryCard.props';
import * as Styled from './styles';

export default function QuizExplanation() {
  const sportDetails: CategoryCardProps[] = [
    {
      background: '#FF9F241A',
      description: '10 point for a correct answer',
      iconSrc: 'assets/icons/notebook.svg',
      title: '10 Question',
    },
    {
      background: '#FF9F241A',
      description: 'Total duration of the quiz',
      iconSrc: 'assets/icons/orange-clock.svg',
      title: '1 hour 20 min',
    },
  ];

  return (
    <Styled.Container>
      <TextCard>Brief explanation about this quiz</TextCard>
      {sportDetails.map(({ background, description, iconSrc, title }) => (
        <CategoryCard
          background={background}
          description={description}
          iconSrc={iconSrc}
          key={title}
          title={title}
        />
      ))}
      <TextCard>
        Please read the text below carefully so you can understand it
      </TextCard>
      <DetailList />
    </Styled.Container>
  );
}
