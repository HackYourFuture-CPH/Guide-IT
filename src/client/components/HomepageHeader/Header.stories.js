import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

export default {
  title: 'Homepage',
  component: Header,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
};

const Template = ({ color, size }) => <Header color={color} size={size} />;

Template.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export const HeaderTitle = Template.bind({});
HeaderTitle.args = {
  color: '#DB643D',
  size: '25',
};
