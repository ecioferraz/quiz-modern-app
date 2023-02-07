import renderTheme from '../../../styles/renderTheme';
import PopularQuiz from '..';
import { describe, expect, it } from 'vitest';

describe('<PopularQuiz />', () => {
  it('should render <PopularQuiz />', () => {
    const { container } = renderTheme(<PopularQuiz />);

    expect(container).toMatchSnapshot();
  });
});
