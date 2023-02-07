import ProgressBarProps from './ProgressBar.props';
import * as Styled from './styles';

export default function ProgressBar({ background, width }: ProgressBarProps) {
  return (
    <Styled.Container>
      <Styled.InnerContainer background={background} width={width} />
    </Styled.Container>
  );
}
