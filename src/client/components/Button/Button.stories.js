import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export default {
  title: 'Components / Button',
  argTypes: {
    text: 'text',
    width: 'number',
    color: {
      control: { type: 'select', options: ['#DB643D', '#535C75', '#FFFFFF'] },
    },
    height: 'number',
    font: {
      control: { type: 'select', options: ['Roboto', 'Roboto mono'] },
    },
  },
  component: Button,
};

const Template = ({ text, width, color, height, font }) => (
  <Button text={text} color={color} width={width} height={height} font={font} />
);

export const ButtonProgress = Template.bind({});

ButtonProgress.args = {
  text: 'Change my name',
  color: '#DB643D',
  width: 200,
  height: 40,
  font: 'Roboto',
};
Template.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
};
