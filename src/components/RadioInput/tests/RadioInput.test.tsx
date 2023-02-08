import renderTheme from '../../../styles/renderTheme';
import RadioInput from '..';
import { describe, it } from 'vitest';

describe('<RadioInput />', () => {
  it('should render <RadioInput />', () => {
    const { container } = renderTheme(
      <RadioInput iconSrc="assets/icons/circle.svg" option="option test" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render <RadioInput /> with correct answer', () => {
    const { container } = renderTheme(
      <RadioInput
        answer="correct"
        iconSrc="assets/icons/circle.svg"
        option="option test"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render <RadioInput /> with wrong answer', () => {
    const { container } = renderTheme(
      <RadioInput
        answer="wrong"
        iconSrc="assets/icons/circle.svg"
        option="option test"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
