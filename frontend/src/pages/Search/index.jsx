import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SearchTemplate from './template';

import CategoryList from 'components/organisms/CategoryList';
import ItemGrid from 'components/organisms/ItemGrid';
import CategoryTitle from 'components/organisms/CategoryTitle';

function Search() {
  let { category } = useParams();
  const [searchParams] = useSearchParams();
  let page = searchParams.get('page');
  category = category || 'new';
  page = page || 1;
  return (
    <SearchTemplate
      categories={<CategoryList currentCategory={category} />}
      title={<CategoryTitle category={category} />}
      items={<ItemGrid />}
    ></SearchTemplate>
  );
}

export default Search;
