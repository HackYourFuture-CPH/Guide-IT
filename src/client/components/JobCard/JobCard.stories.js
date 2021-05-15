import React from 'react';
import PropTypes from 'prop-types';
import JobCard from './JobCard.component';

export default {
  title: 'Components /Job Card',
  component: JobCard,
  argTypes: {
    jobTitle: {
      control: {
        type: 'select',
        options: ['Full stack developer', 'Data analyst', 'UX designer'],
      },
    },
  },
};

const Template = ({ jobTitle }) => <JobCard jobTitle={jobTitle} />;

export const jobCard = Template.bind({});
jobCard.args = {
  jobTitle: 'Full stack developer',
};

Template.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
