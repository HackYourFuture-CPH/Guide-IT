import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    level: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    alphaLevel: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
  },
};

const Template = ({ level, backgroundColor, alphaLevel }) => {
  return (
    <ProgressBar
      level={level}
      backgroundColor={backgroundColor}
      alphaLevel={alphaLevel}
    />
  );
};

export const Progress = Template.bind({});
Progress.args = {
  level: '20',
  backgroundColor: 'red',
  alphaLevel: '0.5',
};
