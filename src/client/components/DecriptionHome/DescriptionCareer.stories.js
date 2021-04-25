import React from 'react';
import { Description } from './DescriptionCareer';
import { object } from '@storybook/addon-knobs';

export default { title: 'DescriptionCareer' };

const arr = [
  {
    title: 'CAREER PATH ',
    content:
      'Curious about the possibilities within the IT-industry and want to know how to fit in job market?',
    content2: 'Then try out the quiz and see the answers.',
    duration: 3,
  },
  {
    title: 'PRESENT YOURSELF',
    content:
      'Interested in tips and advices that will help you grow professionally?',
    content2: 'Then climb up those professional stairs with our elevator.',
    duration: 5,
  },
];

export const DescriptionCareer = () => {
  const exams = object('list of exams', arr, 'props');

  return <Description exams={exams} />;
};
