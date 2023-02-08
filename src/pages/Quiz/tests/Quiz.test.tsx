import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import Quiz from '..';

describe('<Quiz />', () => {
  it('should render <Quiz />', () => {
    const { container } = renderTheme(<Quiz />);

    expect(container).toMatchSnapshot();
  });
});
