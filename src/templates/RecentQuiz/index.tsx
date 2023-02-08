import ProgressBar from '../../components/ProgressBar';
import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import RecentQuizProps from './RecentQuiz.props';
import * as Styled from './styles';

export default function RecentQuiz() {
  const recentQuizProps: RecentQuizProps[] = [
    {
      background: '#21BDCA',
      category: 'Reading',
      percentage: 65,
      iconSrc: 'assets/icons/open-book.svg',
    },
    {
      background: '#5372E7',
      category: 'Speaking',
      percentage: 85,
      iconSrc: 'assets/icons/speaker.svg',
    },
  ];

  return (
    <Styled.Container>
      <TextCard size="small">Recent Quiz</TextCard>
      <Styled.CardsContainer>
        {recentQuizProps.map(
          ({ background, category, percentage, iconSrc }) => (
            <Styled.RecentQuizCardContainer key={category}>
              <SvgCard alt={`${category} icon`} src={iconSrc} />
              <TextCard as="h2" size="small">{category}</TextCard>
              <TextCard as="p" size="small">
                You completed {percentage}%
              </TextCard>
              <ProgressBar background={background} width={percentage} />
            </Styled.RecentQuizCardContainer>
          ),
        )}
      </Styled.CardsContainer>
    </Styled.Container>
  );
}
