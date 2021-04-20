import React from 'react';

import RobotLogo from './RobotLogo';

export default {
  title: 'Components / Robot Component',
  component: RobotLogo,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => <RobotLogo />;
