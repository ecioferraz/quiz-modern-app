import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import PopularQuiz from '..';

describe('<PopularQuiz />', () => {
  it('should render <PopularQuiz />', () => {
    const { container } = renderTheme(<PopularQuiz />);

    expect(container).toMatchSnapshot();
  });
});
