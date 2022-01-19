import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;
