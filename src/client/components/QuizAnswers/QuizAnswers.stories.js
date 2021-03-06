import React from 'react';
import QuizAnswers from './QuizAnswers.component';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default { title: 'QuizAnswers', decorators: [withKnobs] };

export const Quizanswers = () => (
  <QuizAnswers
    isAgreementQuestion={boolean('Agreement question', true)}
    firstAnswer={text(
      'first answer',
      'How the website looks and how easy it is for the users',
    )}
    secondAnswer={text(
      'second answer',
      'Logic behind how the website is built',
    )}
  />
);
