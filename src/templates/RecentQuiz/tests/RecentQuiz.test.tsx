import renderTheme from '../../../styles/renderTheme';
import RecentQuiz from '..';
import { describe, expect, it } from 'vitest';

describe('<RecentQuiz />', () => {
  it('should render <RecentQuiz />', () => {
    const { container } = renderTheme(<RecentQuiz />);

    expect(container).toMatchInlineSnapshot(`
      .c4 {
        background: #F2F2F2;
        border-radius: 10rem;
        height: 0.6rem;
      }

      .c5 {
        background: #21BDCA;
        border-radius: 10rem;
        height: 0.6rem;
        width: 65%;
      }

      .c6 {
        background: #5372E7;
        border-radius: 10rem;
        height: 0.6rem;
        width: 85%;
      }

      .c1 {
        font-size: 1.6rem;
      }

      .c0 {
        margin: 1.6rem 0;
      }

      .c0 h1 {
        color: #999999;
        font-weight: 600;
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
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c3 {
        background: #FAFAFD;
        border-radius: 10px;
        width: 47%;
      }

      .c3 > * {
        margin: 1.6rem;
      }

      .c3 section:has(img) {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 10px 24px 54px rgba(51,51,51,0.05);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 40px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 40px;
      }

      .c3 h2 {
        font-size: 1.4rem;
        font-weight: 600;
      }

      .c3 p {
        color: #999999;
        font-family: "Nunito",sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
      }

      <div>
        <section
          class="c0"
        >
          <h1
            class="c1"
          >
            Recent Quiz
          </h1>
          <section
            class="c2"
          >
            <section
              class="c3"
            >
              <section
                class=""
              >
                <img
                  alt="Reading icon"
                  src="assets/icons/open-book.svg"
                />
              </section>
              <h2
                class="c1"
              >
                Reading
              </h2>
              <p
                class="c1"
              >
                You completed 
                65
                %
              </p>
              <div
                class="c4"
              >
                <div
                  class="c5"
                  width="65"
                />
              </div>
            </section>
            <section
              class="c3"
            >
              <section
                class=""
              >
                <img
                  alt="Speaking icon"
                  src="assets/icons/speaker.svg"
                />
              </section>
              <h2
                class="c1"
              >
                Speaking
              </h2>
              <p
                class="c1"
              >
                You completed 
                85
                %
              </p>
              <div
                class="c4"
              >
                <div
                  class="c6"
                  width="85"
                />
              </div>
            </section>
          </section>
        </section>
      </div>
    `);
  });
});
