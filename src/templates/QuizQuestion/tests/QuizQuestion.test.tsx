import renderTheme from '../../../styles/renderTheme';
import QuizQuestion from '..';
import { screen } from '@testing-library/react';

describe('<QuizQuestion />', () => {
  it('should render <QuizQuestion />', () => {
    renderTheme(<QuizQuestion />);
    const quizQuestion = screen.getByRole('form', { name: 'question' });

    expect(quizQuestion).toMatchSnapshot();
  });
});
