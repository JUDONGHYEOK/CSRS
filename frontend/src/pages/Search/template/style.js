import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  width: 95%;
  margin-top: 60px;
  gap: 40px;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryContainer = styled.aside`
  padding: 5%;
  width: 90%;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
  width: 100%;
`;
