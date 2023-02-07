import renderTheme from '../../../styles/renderTheme';
import CategoryCard from '..';

describe('<CategoryCard />', () => {
  it('should render <CategoryCard /> with rating', () => {
    const { container } = renderTheme(
      <CategoryCard
        background="#FFE3BE"
        category="Technology"
        iconSrc="assets/icons/desktop.svg"
        rating
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render <CategoryCard /> without rating', () => {
    const { container } = renderTheme(
      <CategoryCard
        background="#FFE3BE"
        category="Technology"
        iconSrc="assets/icons/desktop.svg"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
