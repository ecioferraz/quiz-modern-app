import SvgCard from '../../components/SvgCard';
import TextCard from '../../components/TextCard';
import CategoryCardProps from './CategoryCard.props';
import * as Styled from './styles';

export default function CategoryCard({
  background,
  category,
  iconSrc,
  rating = false,
}: CategoryCardProps) {
  return (
    <Styled.Container>
      <Styled.CategoryContainer>
        <SvgCard
          alt={`${category} icon`}
          background={background}
          src={iconSrc}
        />
        <Styled.CategoryDescriptionContainer>
          <TextCard as="h2" size="small">
            {category}
          </TextCard>
          <TextCard as="p" size="small">
            10 Questions
          </TextCard>
        </Styled.CategoryDescriptionContainer>
      </Styled.CategoryContainer>
      {rating && (
        <Styled.RatingContainer>
          <SvgCard alt="Rating star" src="assets/icons/star.svg" />
          <TextCard as="p" size="small">
            4.8
          </TextCard>
        </Styled.RatingContainer>
      )}
    </Styled.Container>
  );
}
