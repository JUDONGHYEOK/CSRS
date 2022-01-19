import React from 'react';

import BasedTemplate from 'pages/BasedTemplate/templates';
import * as S from './style';

function SearchTemplate({ categories, title, items }) {
  return (
    <BasedTemplate footer>
      <S.SearchContainer>
        <S.CategoryContainer>{categories}</S.CategoryContainer>
        <S.ItemsContainer>
          {title}
          {items}
        </S.ItemsContainer>
      </S.SearchContainer>
    </BasedTemplate>
  );
}

export default SearchTemplate;
