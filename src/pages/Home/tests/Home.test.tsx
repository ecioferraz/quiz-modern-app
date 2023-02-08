import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import Home from '..';

describe('<Home />', () => {
  it('should render <Home />', () => {
    const { container } = renderTheme(<Home />);

    expect(container).toMatchSnapshot();
  });
});
