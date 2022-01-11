import React from 'react';

import BasedTemplate from 'pages/BasedTemplate/templates';
import * as S from './style';
import Text from 'components/atoms/Text';

function MainTemplate({ categories }) {
  return (
    <BasedTemplate>
      <S.CategoryGridContainer>
        <S.GuideTextContainer>
          <S.GuideTitle bold>새로운 작품</S.GuideTitle>
          <S.GuideSubTitle>We : ART에 등록되는</S.GuideSubTitle>
          <S.GuideSubTitle>새로운 작품들을 만나보세요</S.GuideSubTitle>
        </S.GuideTextContainer>
        {categories}
      </S.CategoryGridContainer>
    </BasedTemplate>
  );
}

export default MainTemplate;
