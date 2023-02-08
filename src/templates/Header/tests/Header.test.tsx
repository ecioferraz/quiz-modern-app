import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import Header from '..';

describe('<Header />', () => {
  it('should render Detail <Header />', () => {
    const { container } = renderTheme(
      <Header
        alt="test alt"
        iconSrc="assets/icons/config-dots.svg"
        title="Detail Quiz"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Quiz <Header />', () => {
    const { container } = renderTheme(
      <Header
        alt="test alt"
        iconSrc="assets/icons/blue-clock.svg"
        title="Technology"
        time='16:35'
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
