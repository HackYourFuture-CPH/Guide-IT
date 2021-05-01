import React from 'react';
import PropTypes from 'prop-types';
import Robot from '../../assets/images/robot_logo.png';

import './RobotLogo.styles.css';

export default function RobotLogo({ onClick }) {
  return (
    <div className="robot-logo">
      <button onClick={onClick} type="submit" className="robot-logo-div">
        <img src={Robot} alt="robot-logo" />

        <p>
          CAREER FOR <br />
          YOU IS
        </p>
      </button>
      <div className="arrow">
        <span> &#10230; </span>
      </div>
    </div>
  );
}
RobotLogo.propTypes = {
  onClick: PropTypes.func,
};

RobotLogo.defaultProps = {
  onClick: null,
};
