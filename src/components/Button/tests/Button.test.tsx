import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import Button from '..';
import { screen } from '@testing-library/react';

describe('<Button />', () => {
  it('should render <Button />', () => {
    renderTheme(<Button>Button</Button>);

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toMatchInlineSnapshot(`
      .c0 {
        height: 4.8rem;
        font-weight: 600;
      }

      <button
        class="c0"
      >
        Button
      </button>
    `);
  });
});
