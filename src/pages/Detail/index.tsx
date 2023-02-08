import Button from '../../components/Button';
import CategoryCard from '../../templates/CategoryCard';
import Header from '../../templates/Header';
import QuizExplanation from '../../templates/QuizExplanation';
import * as Styled from './styles';

export default function Detail() {
  return (
    <>
      <Header
        alt="More options"
        iconSrc="assets/icons/config-dots.svg"
        title="Detail Quiz"
      />
      <Styled.Container>
        <CategoryCard
          background="#EAEEFF"
          description="10 Questions"
          iconSrc="assets/icons/ball.svg"
          rating
          title="Sport"
        />
        <QuizExplanation />
        <Button>Get Started</Button>
      </Styled.Container>
    </>
  );
}
