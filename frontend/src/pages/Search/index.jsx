import React from 'react';
import { useParams } from 'react-router-dom';
import SearchTemplate from './template';

import CategoryList from 'components/organisms/CategoryList';

function Search() {
  let { category } = useParams();
  category = category || 'new';
  return (
    <SearchTemplate
      categories={<CategoryList currentCategory={category} />}
      items={<div style={{ height: '700vh' }}></div>}
    ></SearchTemplate>
  );
}

export default Search;
