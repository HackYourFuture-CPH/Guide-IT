import { action } from '@storybook/addon-actions';
import React from 'react';

import NextButtonComponent from './NextButtonComponent';

export default {
  title: 'Components / Next Button Component',
  component: NextButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <NextButtonComponent onClick={action('You have clicked next button')} />
);
