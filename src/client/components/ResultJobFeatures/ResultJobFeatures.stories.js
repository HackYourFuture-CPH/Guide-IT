import React from 'react';
import PropTypes from 'prop-types';
import ResultJobFeatures from './ResultJobFeatures.component';

export default {
  title: 'Components /Result Job Features',
  component: ResultJobFeatures,
  argTypes: {
    branchTitle: {
      control: {
        type: 'select',
        options: ['Full stack developer', 'Data analyst', 'UX designer'],
      },
    },
  },
};
const Template = ({ branchTitle }) => {
  return <ResultJobFeatures branchTitle={branchTitle} />;
};

export const JobFeatures = Template.bind({});

JobFeatures.args = {
  branchTitle: 'Job title',
};
Template.propTypes = {
  branchTitle: PropTypes.string.isRequired,
};
