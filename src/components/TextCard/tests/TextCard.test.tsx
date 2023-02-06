import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import renderTheme from '../../../styles/renderTheme';
import TextCard from '..';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

describe('<TextCard />', () => {
  it('should render with default values', () => {
    renderTheme(<TextCard>default text</TextCard>);

    const textCard = screen.getByRole('heading', { name: 'default text' });

    expect(textCard).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });
  });

  it('should render the correct heading sizes', () => {
    const { rerender } = renderTheme(<TextCard size="xsmall">text</TextCard>);

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xsmall,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="small">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="medium">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="large">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="xlarge">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="huge">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextCard size="xhuge">text</TextCard>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });
});
