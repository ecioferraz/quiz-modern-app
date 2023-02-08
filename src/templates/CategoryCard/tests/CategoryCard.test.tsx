import renderTheme from '../../../styles/renderTheme';
import CategoryCard from '..';
import { describe, expect, it } from 'vitest';

describe('<CategoryCard />', () => {
  it('should render <CategoryCard /> with rating', () => {
    const { container } = renderTheme(
      <CategoryCard
        background="#FFE3BE"
        description='description test'
        iconSrc="assets/icons/desktop.svg"
        rating
        title="title test"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render <CategoryCard /> without rating', () => {
    const { container } = renderTheme(
      <CategoryCard
        background="#FFE3BE"
        description='description test'
        iconSrc="assets/icons/desktop.svg"
        title="title test"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
