import renderTheme from '../../../styles/renderTheme';
import HeroHeader from '..';
import { describe, expect, it } from 'vitest';

describe('<HeroHeader />', () => {
  it('should render <HeroHeader />', () => {
    const { container } = renderTheme(<HeroHeader username='username test' />);

    expect(container).toMatchInlineSnapshot(`
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

      .c2 h1 {
        font-weight: 600;
        margin-right: 0.3rem;
      }

      .c2 h1:first-child {
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
              class=""
            >
              <img
                alt="username test hero"
                src="assets/hero/hero.svg"
              />
            </section>
            <section
              class="c2"
            >
              <h1
                class="c3"
              >
                Hello, 
              </h1>
              <h1
                class="c3"
              >
                username test
              </h1>
            </section>
          </section>
          <section
            class=""
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
