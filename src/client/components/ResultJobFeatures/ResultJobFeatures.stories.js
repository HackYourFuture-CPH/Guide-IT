import React from 'react';
import PropTypes from 'prop-types';
import ResultJobFeatures from './ResultJobFeatures.component';

export default {
  title: 'Components /Result Job Features',
  component: ResultJobFeatures,
  argTypes: {
    branchTitle: {
      name: 'Job branch',
      type: { name: 'string', required: true },
    },
  },
};
const Template = ({ branchTitle }) => {
  return <ResultJobFeatures branchTitle={branchTitle} />;
};

export const JobFeatures = Template.bind({});

JobFeatures.args = {
  branchTitle: 'Full stack development',
};
Template.propTypes = {
  branchTitle: PropTypes.string.isRequired,
};
