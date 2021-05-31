import React from 'react';
import Avatar from './ProfileForm.component';
import avatarImage from '../../assets/images/avatar.png';
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

const Template = ({
  color,
  width,
  fontFamily,
  userName,
  userEmail,
  userImage,
}) => (
  <Avatar
    color={color}
    width={width}
    fontFamily={fontFamily}
    userName={userName}
    userEmail={userEmail}
    userImage={userImage}
  />
);

Template.propTypes = {
  color: PropTypes.oneOf(['#DB643D', '#535C75', '#000000']).isRequired,
  width: PropTypes.number.isRequired,
  fontFamily: PropTypes.oneOf(['Roboto', 'Roboto Mono']).isRequired,
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export const AnneForm = Template.bind({});
AnneForm.args = {
  userName: 'Anne',
  userEmail: 'anne@gmail.com',
  userImage: avatarImage,
};
