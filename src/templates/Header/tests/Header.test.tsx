import renderTheme from '../../../styles/renderTheme';
import Header from '..';
import { describe, expect, it } from 'vitest';

describe('<Header />', () => {
  it('should render <Header />', () => {
    const { container } = renderTheme(<Header />);

    expect(container).toMatchInlineSnapshot(`
      .c2 {
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

      .c3 {
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
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: 2.4rem;
        margin-bottom: 3.2rem;
        margin-top: 4.0rem;
        width: 100%;
      }

      .c0 img {
        height: 2.4rem;
        width: 2.4rem;
      }

      .c1 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c1 h1 {
        margin: 0 3.2rem;
        font-weight: 600;
      }

      <div>
        <header
          class="c0"
        >
          <section
            class="c1"
          >
            <section
              class="c2"
            >
              <img
                alt="Go back"
                src="assets/icons/back-arrow.svg"
              />
            </section>
            <h1
              class="c3"
            >
              Detail Quiz
            </h1>
          </section>
          <section
            class="c2"
          >
            <img
              alt="More options"
              src="assets/icons/config-dots.svg"
            />
          </section>
        </header>
      </div>
    `);
  });
});
