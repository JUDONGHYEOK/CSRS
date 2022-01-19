import React from 'react';
import Search from '.';

export default {
  title: 'Pages / Search'
};
const match = { params: { category: 'new' } };

export const SearchPage = () => {
  return <Search {...match} />;
};
