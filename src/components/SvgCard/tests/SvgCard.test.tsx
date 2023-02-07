import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import SvgCard from '..';
import { screen } from '@testing-library/react';

describe('<SvgCard />', () => {
  it('should render <SvgCard />', () => {
    renderTheme(
      <SvgCard alt="alt test" src="src test" />,
    );

    const svgCard = screen.getByAltText('alt test');

    expect(svgCard).toMatchInlineSnapshot();
  });
});
