import React from 'react';
import PropTypes from 'prop-types';
import QuizResultPage from './QuizResultPage.component';

export default {
  title: 'QuizResultPage',
  component: QuizResultPage,
  argTypes: {
    jobTitle: {
      control: {
        type: 'select',
        options: ['Full stack developer', 'Data analyst', 'UX designer'],
      },
    },
  },
};

const Template = ({ jobTitle }) => <QuizResultPage jobTitle={jobTitle} />;

export const QuizResult = Template.bind({});
QuizResult.args = {
  jobTitle: 'Job title',
};

Template.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
