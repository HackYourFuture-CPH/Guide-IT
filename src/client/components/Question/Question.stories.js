import { text } from '@storybook/addon-knobs';
import React from 'react';
import image1 from '../../assets/images/questionBackgrounds/question1background.png';

import QuestionComponent from './Question.component';

export default {
  title: 'Components / Question Component',
  component: QuestionComponent,
};

export const MultiChoice = () => (
  <QuestionComponent
    question={text(
      'Question',
      'When visiting a website, what is it that you are most interested in?',
    )}
    imageSrc={text('imageSrc', image1)}
  />
);
