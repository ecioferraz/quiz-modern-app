import renderTheme from '../../../styles/renderTheme';
import Achievement from '..';

describe('<Achievement />', () => {
  it('should render <Achievement />', () => {
    const { container } = renderTheme(<Achievement />);

    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 1.6rem;
      }

      .c2 {
        font-size: 5.6rem;
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

      .c0 section:has(h1,p) {
        margin-right: 7.8rem;
      }

      .c0 h1,
      .c0 p {
        margin: 0.8rem;
      }

      .c0 p {
        color: #4E5C66;
        font-size: 1.2rem;
      }

      @media (max-width:768px) {
        .c2 {
          font-size: 4.8rem;
        }
      }

      <div>
        <section
          class="c0"
        >
          <section
            class=""
          >
            <img
              alt="Achievement percentage"
              src="assets/achievement/percentage.svg"
            />
          </section>
          <section>
            <h1
              class="c1"
            >
              Good Result!
            </h1>
            <p
              class="c2"
            >
              Share your achievement with your friend
            </p>
          </section>
        </section>
      </div>
    `);
  });
});
