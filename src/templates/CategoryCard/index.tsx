import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import CategoryCardProps from './CategoryCard.props';
import * as Styled from './styles';

export default function CategoryCard({
  background,
  description,
  iconSrc,
  rating = false,
  title,
}: CategoryCardProps) {
  return (
    <Styled.Container>
      <Styled.CategoryContainer>
        <SvgCard
          alt={`${title} icon`}
          background={background}
          src={iconSrc}
        />
        <Styled.CategoryDescriptionContainer>
          <TextCard as="h2">
            {title}
          </TextCard>
          <TextCard as="p">
            {description}
          </TextCard>
        </Styled.CategoryDescriptionContainer>
      </Styled.CategoryContainer>
      {rating && (
        <Styled.RatingContainer>
          <SvgCard alt="Rating star" src="assets/icons/star.svg" />
          <TextCard as="p">
            4.8
          </TextCard>
        </Styled.RatingContainer>
      )}
    </Styled.Container>
  );
}
