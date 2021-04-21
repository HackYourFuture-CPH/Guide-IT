import React from 'react';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

export default {
  title: 'Buttons',
  component: Buttons,
  argTypes: {
    width: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    font: {
      control: { type: 'select', options: ['Roboto', 'Roboto mono'] },
    },
    backgroundColor: {
      control: { type: 'select', options: ['#DB643D', '#535C75', '#FFFFFF'] },
    },
    color: {
      control: { type: 'select', options: ['#DB643D', '#535C75', '#FFFFFF'] },
    },
  },
};

const Template = ({ label, width, font, color, backgroundColor }) => {
  return (
    <Buttons
      label={label}
      width={width}
      font={font}
      color={color}
      backgroundColor={backgroundColor}
    />
  );
};

export const Button = Template.bind({});

Button.args = {
  label: 'Click me',
  width: '15',
  font: 'Roboto',
  color: 'white',
  backgroundColor: 'orange',
};

Template.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
