import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import SvgCard from '..';

describe('<SvgCard />', () => {
  it('should render <SvgCard />', () => {
    const { container } = renderTheme(
      <SvgCard alt="alt test" src="src test" />,
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      <div>
        <section
          class="c0"
        >
          <img
            alt="alt test"
            src="src test"
          />
        </section>
      </div>
    `);
  });

  it('should render <SvgCard /> with background', () => {
    const { container } = renderTheme(
      <SvgCard alt="alt test" src="src test" background='black' />,
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: black;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      <div>
        <section
          class="c0"
        >
          <img
            alt="alt test"
            src="src test"
          />
        </section>
      </div>
    `);
  });

  it('should render <SvgCard /> with time', () => {
    const { container } = renderTheme(
      <SvgCard alt="alt test" src="src test" time='16:35' />,
    );

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 1.6rem;
      }

      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      <div>
        <section
          class="c0"
        >
          <img
            alt="alt test"
            src="src test"
          />
          <span
            class="c1"
          >
            16:35
          </span>
        </section>
      </div>
    `);
  });
});
