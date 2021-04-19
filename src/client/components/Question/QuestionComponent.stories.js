import { array, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import image1 from '../../assets/images/questionBackgrounds/question1background.png';
import image2 from '../../assets/images/questionBackgrounds/question2background.png';

import QuestionComponent from './QuestionComponent';

export default {
  title: 'Components / Question Component',
  component: QuestionComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const MultiChoice = () => (
  <QuestionComponent
    question={text(
      'Question',
      'When visiting a website, what is it that you are most interested in?',
    )}
    imageSrc={text('imageSrc', image1)}
    options={array('Options', [
      'How the website looks and how easy it is for the users',
      'Logic behind how the website is built',
    ])}
    selectedOption={number('Selected Option', 0)}
    onClick={action('You have clicked a button')}
  />
);

export const AgreeScale = () => (
  <QuestionComponent
    question={text(
      'Question',
      'I can easily notice changes around me including people, culture, trends, etc.',
    )}
    imageSrc={text('imageSrc', image2)}
    options={array('Options', null)}
    selectedOption={number('Selected Option', 0)}
    onClick={action('You have clicked a button')}
  />
);
