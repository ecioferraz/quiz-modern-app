import renderTheme from '../../../styles/renderTheme';
import RadioInput from '..';
import { describe, it } from 'vitest';

describe('<RadioInput />', () => {
  it('should render <RadioInput />', () => {
    renderTheme(<RadioInput>Children</RadioInput>);
  });
});
