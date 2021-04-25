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

const Template = ({ color, fontSize }) => (
  <Header color={color} fontSize={fontSize} />
);

Template.propTypes = {
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

export const HeaderTitle = Template.bind({});
HeaderTitle.args = {
  color: '#DB643D',
  fontSize: '25',
};
