import renderTheme from '../../../styles/renderTheme';
import ProgressBar from '..';

describe('<ProgressBar />', () => {
  it('should render <ProgressBar />', () => {
    const { container } = renderTheme(
      <ProgressBar background="#21BDCA" width={75} />,
    );

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background: #F2F2F2;
        border-radius: 10rem;
        height: 0.6rem;
      }

      .c1 {
        background: #21BDCA;
        border-radius: 10rem;
        height: 0.6rem;
        width: 75%;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1"
            width="75"
          />
        </div>
      </div>
    `);
  });
});
