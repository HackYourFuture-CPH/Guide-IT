import React from 'react';
import Avatar from './ProfileFormComponent';
import PropTypes from 'prop-types';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    color: {
      control: { type: 'select', options: ['#DB643D', '#535C75', '#000000'] },
    },
    width: {
      control: { type: 'range', min: 400, max: 1200, step: 50 },
    },
    fontFamily: {
      control: {
        type: 'radio',
        options: ['Roboto', 'Roboto Mono'],
      },
    },
  },
};

const Template = ({ color, width, fontFamily }) => (
  <Avatar color={color} width={width} fontFamily={fontFamily} />
);

Template.propTypes = {
  color: PropTypes.oneOf(['#DB643D', '#535C75', '#000000']),
  width: PropTypes.number.isRequired,
  fontFamily: PropTypes.oneOf(['Roboto', 'Roboto Mono']),
};

export const AvatarForm = Template.bind({});
AvatarForm.args = {
  color: '#535C75',
  width: 400,
  fontFamily: 'Roboto',
};
