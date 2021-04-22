import { array, text } from '@storybook/addon-knobs';
import React from 'react';
import CardProfileResultComponent from './CardProfileResultComponent';

export default {
  title: 'Components / Card Profile Result Component',
  component: CardProfileResultComponent,
  argTypes: {
    title: 'text',
    results: 'array',
  },
};

export const PersonalComponent = () => (
  <CardProfileResultComponent
    title={text('Title', 'Your Personal Profile')}
    results={array('Personal Results', [
      'extrovert',
      'detail-oriented',
      'super-planner (able to handle whole project development)',
    ])}
  />
);

export const ProfessionalComponent = () => (
  <CardProfileResultComponent
    title={text('Title', 'Your Professional Profile')}
    results={array('Professional Results', [
      'creative',
      'knows fundamental database concepts',
      'works well under pressure',
    ])}
  />
);
