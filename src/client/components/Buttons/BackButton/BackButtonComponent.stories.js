import { action } from '@storybook/addon-actions';
import React from 'react';

import BackButtonComponent from './BackButtonComponent';

export default {
  title: 'Components / Back Button Component',
  component: BackButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <BackButtonComponent onClick={action('You have clicked back button')} />
);
