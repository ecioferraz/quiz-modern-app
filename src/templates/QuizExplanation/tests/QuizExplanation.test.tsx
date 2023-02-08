import renderTheme from '../../../styles/renderTheme';
import QuizExplanation from '..';
import { describe, expect, it } from 'vitest';

describe('<QuizExplanation />', () => {
  it('should render <QuizExplanation />', () => {
    const { container } = renderTheme(<QuizExplanation />);

    expect(container).toMatchSnapshot();
  });
});
