import Button from '../../components/Button';
import CategoryCard from '../../templates/CategoryCard';
import Header from '../../templates/Header';
import QuizExplanation from '../../templates/QuizExplanation';
import * as Styled from './styles';

export default function Detail() {
  return (
    <>
      <Header />
      <Styled.Container>
        <CategoryCard
          background='#EAEEFF'
          description='10 Questions'
          iconSrc='assets/icons/ball.svg'
          rating
          title='Sport'
        />
        <QuizExplanation />
        <Button>Get Started</Button>
      </Styled.Container>
    </>
  );
}
