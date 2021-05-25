import React from 'react';
import PropTypes from 'prop-types';
import CareerPage from './CareerPage.container';

export default {
  title: 'CareerPage',
  component: CareerPage,
  argTypes: {
    jobTitle: {
      control: {
        type: 'select',
        options: ['Full stack developer', 'Data analyst', 'UX designer'],
      },
    },
  },
};

const Template = ({ jobTitle }) => <CareerPage jobTitle={jobTitle} />;

export const JobResult = Template.bind({});
JobResult.args = {
  jobTitle: 'Job title',
};

Template.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
