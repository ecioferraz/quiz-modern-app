import { describe, expect, it } from 'vitest';
import renderTheme from '../../../styles/renderTheme';
import HeroHeader from '..';

describe('<HeroHeader />', () => {
  it('should render <HeroHeader />', () => {
    const { container } = renderTheme(<HeroHeader username='username test' />);

    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 1.6rem;
      }

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
        height: 4.0rem;
      }

      .c0 img {
        height: 2.4rem;
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

      .c1 img {
        height: 4.0rem;
      }

      .c3 {
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

      .c3 h1 {
        font-weight: 600;
        margin-right: 0.3rem;
      }

      .c3 h1:first-child {
        color: #999999;
        font-weight: 500;
        margin-left: 1.6rem;
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
                alt="username test hero"
                src="assets/hero/hero.svg"
              />
            </section>
            <section
              class="c3"
            >
              <h1
                class="c4"
              >
                Hello, 
              </h1>
              <h1
                class="c4"
              >
                username test
              </h1>
            </section>
          </section>
          <section
            class="c2"
          >
            <img
              alt="Notifications"
              src="assets/icons/bell.svg"
            />
          </section>
        </header>
      </div>
    `);
  });
});
