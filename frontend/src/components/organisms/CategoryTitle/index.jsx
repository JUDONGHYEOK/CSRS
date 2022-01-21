import * as Styled from './style';
import { img } from 'assets/img';

function CategoryTitle({ category }) {
  category = category.toUpperCase();
  return (
    <Styled.CategoryContainer>
      <Styled.TitleContainer>
        <Styled.Title>{category}</Styled.Title>
        <Styled.RightImg src={img.CHEVERON_RIGHT}></Styled.RightImg>
      </Styled.TitleContainer>
      <Styled.Description>
        WE : ART에 등록된 새로운 작품들을 만나보세요!
      </Styled.Description>
    </Styled.CategoryContainer>
  );
}

export default CategoryTitle;
