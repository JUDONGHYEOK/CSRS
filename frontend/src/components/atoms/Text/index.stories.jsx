import React from 'react';
import Text from '.';
import { text } from '@storybook/addon-knobs';
export default {
  title: 'Atoms / Text'
};

export const span = () => {
  return <Text children={text('content', 'text')}></Text>;
};

export const category = () => {
  return <div style={{ fontFamily: 'AppleSDGothicNeo' }}>hello</div>;
};
