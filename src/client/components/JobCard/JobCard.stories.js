import React from 'react';
import PropTypes from 'prop-types';
import JobCard from './JobCard.component';

export default {
  title: 'Components /Job Card',
  component: JobCard,
  argTypes: {
    title: 'text',
    content: 'text',
  },
};

const Template = ({ title, content }) => (
  <JobCard title={title} content={content} />
);

export const jobCard = Template.bind({});
jobCard.args = {
  title: 'Job title',
  content: 'content',
};

Template.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
