import React from 'react';
import Elevator from './Elevator.component';
import PropTypes from 'prop-types';

export default {
  title: 'Components/Elevator',
  component: Elevator,
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5],
      },
    },
  },
};

const Template = ({ level }) => <Elevator level={level} />;

export const elevator = Template.bind({});
elevator.args = {
  level: 0,
};

Template.propTypes = {
  level: PropTypes.number.isRequired,
};
