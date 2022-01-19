import { CATEGORY_NAMES } from 'common/constants/string';
import React from 'react';

import * as S from './style';

function CategoryList({ currentCategory }) {
  function CategoryLinks(props) {
    const currentChioced = props.current;
    const listItems = CATEGORY_NAMES.map((name) => {
      const link = name.toLowerCase().split(' ').join('');
      if (link === currentChioced) {
        return (
          <S.CategoryBtn key={name} choice>
            {name}
          </S.CategoryBtn>
        );
      }
      return (
        <S.CategoryBtn key={name} to={`/art/${link}`}>
          {name}
        </S.CategoryBtn>
      );
    });
    return listItems;
  }
  return (
    <S.CategoryContainer>
      <S.CategoryTitle>Category</S.CategoryTitle>
      <S.Divider></S.Divider>
      <CategoryLinks current={currentCategory} />
    </S.CategoryContainer>
  );
}

export default CategoryList;
