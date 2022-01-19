import styled, { css } from 'styled-components';

import Btn from 'components/atoms/Btn';
import Img from 'components/atoms/Img';
import Text from 'components/atoms/Text';

export const ArtContainer = styled.div`
  width: 100%;
  min-width: 100px;
  position: relative;
  :after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const Button = styled(Btn)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 0.7px solid #a4a4a4;
  background: inherit;
  padding: 5%;
`;

export const Image = styled(Img)`
  width: 100%;
  height: 70%;
  object-fit: scale-down;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  margin-bottom: 30px;
  gap: 6px;
`;

export const Title = styled(Text)`
  color: #494949;
  font-size: 1.2rem;
`;

export const SubTitle = styled(Text)`
  color: #747474;
  font-size: 0.8rem;
`;

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
