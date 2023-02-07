import DetailListProps from './DetailList.props';
import * as Styled from './styles';

export default function DetailList({ children }: DetailListProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
