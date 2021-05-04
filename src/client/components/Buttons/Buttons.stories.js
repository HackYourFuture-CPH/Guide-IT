import React from 'react';
import Buttons from './Buttons.component';

// The code starts

export default {
  title: 'Buttons',
  component: Buttons,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio', options: ['small', 'big'] },
    },
    isMono: {
      control: { type: 'boolean' },
    },

    color: {
      control: { type: 'radio', options: ['orange', 'grey', 'white'] },
    },
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({ label, size, isMono, color, onClick }) => {
  return (
    <Buttons
      label={label}
      size={size}
      isMono={isMono}
      color={color}
      onClick={onClick}
    />
  );
};

export const Button = Template.bind({});

Button.args = {
  label: 'Click me',
  size: 'small',
  isMono: false,
  color: 'orange',
  onClick: () => {
    // eslint-disable-next-line no-console
    console.log('I was clicked');
  },
};
