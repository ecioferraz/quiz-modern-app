import Button from '../../components/Button';
import RadioInput from '../../components/RadioInput';
import RadioInputProps from '../../components/RadioInput/RadioInput.props';
import TextCard from '../../components/TextCard';
import * as Styled from './styles';

export default function QuizQuestion() {
  const questionOptions: RadioInputProps[] = [
    {
      answer: 'correct',
      iconSrc: 'assets/icons/circle.svg',
      option: 'Football',
    },
    {
      iconSrc: 'assets/icons/circle.svg',
      option: 'Basketball',
    },
    {
      answer: 'wrong',
      iconSrc: 'assets/icons/x.svg',
      option: 'Volleyball',
    },
    {
      iconSrc: 'assets/icons/circle.svg',
      option: 'Shuttlecock',
    },
  ];

  return (
    <Styled.Container aria-label="question">
      <TextCard>The image below is a field image used for?</TextCard>
      <img src="assets/images/question-image.png" />
      {questionOptions.map(({ iconSrc, answer, option }) => (
        <RadioInput
          answer={answer}
          iconSrc={iconSrc}
          key={option}
          option={option}
        />
      ))}
      <Styled.ButtonsContainer>
        <Button>Previous</Button>
        <Button>Next</Button>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
}
