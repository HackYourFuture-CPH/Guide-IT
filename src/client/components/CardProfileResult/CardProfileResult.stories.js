import { array, text } from '@storybook/addon-knobs';
import React from 'react';
import CardProfileResult from './CardProfileResult.component';

export default {
  title: 'Components / Card Profile Result Component',
  component: CardProfileResult,
  argTypes: {
    title: 'text',
    results: 'array',
  },
};

export const PersonalComponent = () => (
  <CardProfileResult
    title={text('Title', 'Your Personal Profile')}
    results={array('Personal Results', [
      'extrovert',
      'detail-oriented',
      'super-planner (able to handle whole project development)',
    ])}
  />
);

export const ProfessionalComponent = () => (
  <CardProfileResult
    title={text('Title', 'Your Professional Profile')}
    results={array('Professional Results', [
      'creative',
      'knows fundamental database concepts',
      'works well under pressure',
    ])}
  />
);
