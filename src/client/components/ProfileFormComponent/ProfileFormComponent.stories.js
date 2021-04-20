import React from 'react';
import Avatar from './ProfileFormComponent';
import PropTypes from 'prop-types';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    width: {
      control: { type: 'range', min: 400, max: 1200, step: 50 },
    },
  },
};

const Template = ({ color, width }) => <Avatar color={color} width={width} />;

Template.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export const AvatarForm = Template.bind({});
AvatarForm.args = {
  color: '#535C75',
  width: 400,
};
