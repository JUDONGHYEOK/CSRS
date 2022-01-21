import React from 'react';

import * as Styled from './style';
import { img } from 'assets/img';

function PageNumberList({ link, currentPage, maxPage }) {
  const pageList = [1, 2, 3, 4, 5];
  const unit = Math.floor((currentPage - 1) / 5) * 5;
  const currentPageList = pageList.map((page) => page + unit);
  function PageNumbers({ link, currentPage, maxPage }) {
    const listItem = currentPageList
      .filter((page) => page <= maxPage)
      .map((page, idx) => {
        return (
          <Styled.PageBtn
            to={`${link}?page=${page}`}
            key={page}
            current={page === currentPage}
          >
            {page}
          </Styled.PageBtn>
        );
      });
    return listItem;
  }
  const smallestPageNumber = Math.min(...currentPageList);
  const largestPageNumber = Math.max(...currentPageList);
  return (
    <Styled.PageNumberListContainer>
      {smallestPageNumber > 1 && (
        <Styled.PageBtn
          to={`${link}?page=${smallestPageNumber - 1}`}
        >{`<`}</Styled.PageBtn>
      )}
      <PageNumbers link={link} currentPage={currentPage} maxPage={maxPage} />
      {largestPageNumber < maxPage && (
        <Styled.PageBtn
          to={`${link}?page=${largestPageNumber + 1}`}
        >{`>`}</Styled.PageBtn>
      )}
    </Styled.PageNumberListContainer>
  );
}

export default PageNumberList;
