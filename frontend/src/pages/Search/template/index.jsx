import React from 'react';

import BasedTemplate from 'pages/BasedTemplate/templates';
import * as S from './style';

function SearchTemplate({ categories, items }) {
  return (
    <BasedTemplate footer>
      <S.SearchContainer>
        <S.CategoryContainer>{categories}</S.CategoryContainer>
        <S.ItemsContainer>{items}</S.ItemsContainer>
      </S.SearchContainer>
    </BasedTemplate>
  );
}

export default SearchTemplate;
