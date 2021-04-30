import React from 'react';
import PropTypes from 'prop-types';
import JobResultPage from './JobResultPage.component';

export default {
  title: 'JobResultPage',
  component: JobResultPage,
  argTypes: {
    jobTitle: {
      control: {
        type: 'select',
        options: ['Full stack developer', 'Data analyst', 'UX designer'],
      },
    },
  },
};

const Template = ({ jobTitle }) => <JobResultPage jobTitle={jobTitle} />;

export const JobResult = Template.bind({});
JobResult.args = {
  jobTitle: 'Job title',
};

Template.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
