import renderTheme from '../../../styles/renderTheme';
import { screen } from '@testing-library/react';
import QuizQuestion from '..';

describe('<QuizQuestion />', () => {
  it('should render <QuizQuestion />', () => {
    renderTheme(<QuizQuestion />);
    const quizQuestion = screen.getByRole('form', { name: 'question' });

    expect(quizQuestion).toMatchSnapshot();
  });
});
