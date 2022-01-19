import styled from 'styled-components';

import Text from 'components/atoms/Text';
import Img from 'components/atoms/Img';
export const CategoryContainer = styled.div`
  width: 100%;
  margin-bottom: 2em;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 1.8rem;
  font-family: 'AppleSDGothicNeo';
  color: black;
  font-weight: bold;
`;

export const RightImg = styled(Img)`
  width: 0.9rem;
  padding-bottom: 0.4rem;
  margin-left: 1em;
`;

export const Description = styled(Text)`
  font-size: 1.25rem;
  font-weight: bold;
  color: #747474;
`;
