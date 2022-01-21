import React from 'react';
import PageNumberList from '.';
import { number } from '@storybook/addon-knobs';
export default {
  title: 'organisms / PageNumberList'
};

export const pageNumberListTest = () => {
  return (
    <PageNumberList
      link={'/category/painting'}
      currentPage={number('currentPage', 3)}
      maxPage={43}
    ></PageNumberList>
  );
};
