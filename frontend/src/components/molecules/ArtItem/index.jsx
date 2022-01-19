import Img from 'components/atoms/Img';
import React from 'react';

import * as Styled from './style';

function ArtItem({ category, artist, name, src, price, dueDate }) {
  return (
    <Styled.ArtContainer>
      <Styled.Button>
        <Styled.Image src={src}></Styled.Image>
        <Styled.TitleContainer>
          <Styled.SubTitle bold>{category}</Styled.SubTitle>
          <Styled.Title bold>{`[${artist} 작가] ${name}`}</Styled.Title>
        </Styled.TitleContainer>
        <Styled.SubTitleContainer>
          <Styled.SubTitle bold>{`${price} 입찰중`}</Styled.SubTitle>
          <Styled.SubTitle bold>{dueDate}</Styled.SubTitle>
        </Styled.SubTitleContainer>
      </Styled.Button>
    </Styled.ArtContainer>
  );
}

export default ArtItem;
