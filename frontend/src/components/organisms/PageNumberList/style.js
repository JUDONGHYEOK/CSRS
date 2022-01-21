import styled, { css } from 'styled-components';
import Btn from 'components/atoms/Btn';

export const Background = styled.div`
  position: relative;
  width: 100%;
  min-width: 940px;
`;

export const PageNumberListContainer = styled.div`
  display: flex;
  width: 96%;
  align-items: center;
  justify-content: center;
  gap: 2%;
`;

export const PageBtn = styled(Btn)`
  font-size: 1.2rem;
  color: #8e8e8e;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #8e8e8e;
  }
  ${(props) =>
    props.current &&
    css`
      color: black;
      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        color: black;
      }
    `}
`;
