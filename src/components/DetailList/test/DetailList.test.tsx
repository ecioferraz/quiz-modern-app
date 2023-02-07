import renderTheme from '../../../styles/renderTheme';
import DetailList from '..';
import { screen } from '@testing-library/react';

describe('<DetailList />', () => {
  it('should render <DetailList />', () => {
    renderTheme(<DetailList>Children</DetailList>);

    const detailList = screen.getByRole('list');

    expect(detailList).toMatchInlineSnapshot(`
      <ul
        class=""
      >
        Children
      </ul>
    `);
  });
});
