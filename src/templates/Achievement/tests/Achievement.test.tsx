import renderTheme from '../../../styles/renderTheme';
import Achievement from '..';
import { describe, expect, it } from 'vitest';

describe('<Achievement />', () => {
  it('should render <Achievement />', () => {
    const { container } = renderTheme(<Achievement />);

    expect(container).toMatchInlineSnapshot(`
      .c3 {
        font-size: 1.6rem;
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
        background: url('../../assets/images/achievement-bg.png') no-repeat;
        background-size: 100%;
        border-radius: 10px;
        box-shadow: 10px 24px 54px rgba(51,51,51,0.03);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin: 3.4rem 0 3.2rem;
        width: 100%;
      }

      .c0 section:has(img) {
        margin: 1.6rem;
      }

      .c2 {
        margin-right: 7.8rem;
      }

      .c2 h1,
      .c2 p {
        margin: 0.8rem;
      }

      .c2 p {
        color: #4E5C66;
        font-size: 1.2rem;
      }

      <div>
        <section
          class="c0"
        >
          <section
            class="c1"
          >
            <img
              alt="Achievement percentage"
              src="assets/achievement/percentage.svg"
            />
          </section>
          <section
            class="c2"
          >
            <h1
              class="c3"
            >
              Good Result!
            </h1>
            <p
              class="c3"
            >
              Share your achievement with your friend
            </p>
          </section>
        </section>
      </div>
    `);
  });
});
