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

  @media screen and (max-width: 850px) {
    font-size: 0.5em;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;

  @media screen and (max-width: 850px) {
    width: 3px;
    height: 100%;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  position: sticky;
  top: 10%;
  width: 70%;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 15%;
  gap: 1em;
  margin-top: 2em;
  border-radius: 10px;
  @media screen and (max-width: 850px) {
    flex-direction: row;
    align-items: center;
    width: 94%;
    padding: 3%;
  }
`;

export const CategoryTitle = styled.span`
  font-size: 1.5rem;
  cursor: default;
`;
