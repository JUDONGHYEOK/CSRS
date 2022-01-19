import ArtItem from 'components/molecules/ArtItem';
import React from 'react';

import { img } from 'assets/img';
import * as S from './style';

function ItemGrid({ children }) {
  return (
    <S.ItemContainer>
      {' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>{' '}
      <ArtItem
        src={img.LogoOnlyImage}
        category={'Painting'}
        artist={'홍길동'}
        name={'가을과 해지는 노을'}
        price={'3,550,000'}
        dueDate={'D-15'}
      ></ArtItem>
    </S.ItemContainer>
  );
}

export default ItemGrid;
