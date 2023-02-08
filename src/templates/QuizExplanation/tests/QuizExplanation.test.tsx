import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import QuizExplanation from '..';

describe('<QuizExplanation />', () => {
  it('should render <QuizExplanation />', () => {
    const { container } = renderTheme(<QuizExplanation />);

    expect(container).toMatchSnapshot();
  });
});
