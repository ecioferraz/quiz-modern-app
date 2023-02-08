import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import Detail from '..';

describe('<Detail />', () => {
  it('should render <Detail />', () => {
    const { container } = renderTheme(<Detail />);

    expect(container).toMatchSnapshot();
  });
});
