import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import IconCard from '..';

describe('<IconCard />', () => {
  it('should render <IconCard />', () => {
    const { container } = renderTheme(
      <IconCard alt="alt test" src="src test" />,
    );

    expect(container).toMatchInlineSnapshot();
  });
});
