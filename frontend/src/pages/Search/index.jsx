import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SearchTemplate from './template';

import CategoryList from 'components/organisms/CategoryList';
import ItemGrid from 'components/organisms/ItemGrid';
import CategoryTitle from 'components/organisms/CategoryTitle';
import PageNumberList from 'components/organisms/PageNumberList';

function Search() {
  let { category } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  category = category || 'new';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);
  return (
    <SearchTemplate
      categories={<CategoryList currentCategory={category} />}
      title={<CategoryTitle category={category} />}
      items={<ItemGrid />}
      pagination={
        <PageNumberList
          link={`/art/${category}`}
          currentPage={page}
          maxPage={43}
        />
      }
    ></SearchTemplate>
  );
}

export default Search;
