import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import PopularQuizProps from './PopularQuiz.props';
import * as Styled from './styles';

export default function PopularQuiz() {
  const popularQuizCards: PopularQuizProps[] = [
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
        <Styled.PopularQuizContainer>
          <Styled.CategoryContainer>
            <SvgCard
              alt={`${category} icon`}
              background={background}
              src={iconSrc}
            />
            <Styled.CategoryDescriptionContainer>
              <TextCard as="h2" size="small">
                {category}
              </TextCard>
              <TextCard as="p" size="small">
                10 Questions
              </TextCard>
            </Styled.CategoryDescriptionContainer>
          </Styled.CategoryContainer>
          <Styled.RatingContainer>
            <SvgCard alt="Rating star" src="assets/icons/star.svg" />
            <TextCard as="p" size="small">
              4.8
            </TextCard>
          </Styled.RatingContainer>
        </Styled.PopularQuizContainer>
      ))}
    </Styled.Container>
  );
}
