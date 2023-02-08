import renderTheme from '../../../styles/renderTheme';
import DetailList from '..';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('<DetailList />', () => {
  it('should render <DetailList />', () => {
    renderTheme(<DetailList>Children</DetailList>);

    const detailList = screen.getByRole('list');

    expect(detailList).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        padding-left: 1.6rem;
      }

      .c0 li {
        color: #666666;
        font-family: "Nunito",sans-serif;
        margin: 2.4rem 0;
      }

      .c0 li::marker {
        color: #333333;
      }

      .c0 li:last-child {
        margin-bottom: 0;
      }

      <ul
        class="c0"
      >
        <li>
          10 point awarded for a correct answer and no marks for a incorrect answer
        </li>
        <li>
          Tap on options to select the correct answer
        </li>
        <li>
          Click submit if you are sure you want to complete all the quizzes
        </li>
      </ul>
    `);
  });
});
