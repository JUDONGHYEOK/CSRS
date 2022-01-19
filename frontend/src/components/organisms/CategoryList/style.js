import styled, { css } from 'styled-components';

import Btn from 'components/atoms/Btn';

export const CategoryBtn = styled(Btn)`
  font-family: 'AppleSDGothicNeo';
  text-align: start;
  justify-content: flex-start;
  ${(props) =>
    props.choice &&
    css`
      font-weight: bold;
      font-size: 1.2em;
    `}
  :hover {
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
`;

export const CategoryContainer = styled.div`
  display: flex;
  position: sticky;
  top: 3em;
  width: max(100%, 100px);
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 2em;
  gap: 1em;
`;

export const CategoryTitle = styled.span`
  font-size: 1.5rem;
  cursor: default;
`;
