import React from 'react';
import ElevatorPitchInstructions from './ElevatorPitchInstructions.component';
import PropTypes from 'prop-types';

export default {
  title: 'components / Elevator pitch instructions ',
  component: ElevatorPitchInstructions,
};

export const ElevatorInstructions = ({ onClick }) => (
  <ElevatorPitchInstructions onClick={onClick} />
);

ElevatorInstructions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
