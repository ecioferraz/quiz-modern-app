import * as Styled from './styles';
import ProgressBar from '../../components/ProgressBar';
import TextCard from '../../components/TextCard';
import Header from '../../templates/Header';
import QuizQuestion from '../../templates/QuizQuestion';

export default function Quiz() {
  return (
    <>
      <Header
        alt="Remaining time"
        iconSrc="assets/icons/blue-clock.svg"
        title="Technology"
        time="16:35"
      />
      <Styled.Container>
        <Styled.ProgressContainer>
          <ProgressBar background="#21BDCA" width={64} />
          <TextCard as="p">Completed 64%</TextCard>
        </Styled.ProgressContainer>
      </Styled.Container>
      <QuizQuestion />
    </>
  );
}
