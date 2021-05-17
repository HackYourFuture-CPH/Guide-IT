import React from 'react';
import ProfileCareerResult from './ProfileCareerResult.component';
import PropTypes from 'prop-types';

export default {
  title: 'Components /Profile Career Result',
  component: ProfileCareerResult,
  argTypes: {
    jobTitle: {
      control: {
        type: 'select',
        options: ['Full stack developer', 'Data analyst', 'UX designer'],
      },
    },
  },
};

const Template = ({ jobTitle }) => <ProfileCareerResult jobTitle={jobTitle} />;

export const profileCareer = Template.bind({});
profileCareer.args = {
  jobTitle: 'Full stack developer',
};

Template.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
