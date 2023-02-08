import SvgCard from '../SvgCard';
import TextCard from '../TextCard';
import RadioInputProps from './RadioInput.props';
import * as Styled from './styles';

export default function RadioInput({ answer, iconSrc, option }: RadioInputProps) {
  return (
    <Styled.Container answer={answer}>
      {/* functionally could be something like this */}
      {/* {options.map((option) => (
        <label htmlFor={option} key={option}>
          <input id={option} name="question" type="radio" value={option} />
          {option}
        </label>
      ))} */}
      <SvgCard alt="Radio option" src={iconSrc} />
      <TextCard as="p">{option}</TextCard>
    </Styled.Container>
  );
}
