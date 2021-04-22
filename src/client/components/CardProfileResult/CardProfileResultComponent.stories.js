import { text } from '@storybook/addon-knobs';
import React from 'react';

import CardProfileResultComponent from './CardProfileResultComponent';

export default {
  title: 'Components / Card Profile Result Component',
  component: CardProfileResultComponent,
};

export const Component = () => (
  <CardProfileResultComponent title={text('Title', 'Test title')} />
);
