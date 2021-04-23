import React from 'react';
import PropTypes from 'prop-types';
import Robot from '../../assets/images/robot_logo.png';

import './RobotLogo.css';

export default function RobotLogo({ onClick }) {
  return (
    <div className="RobotLogo">
      <button onClick={onClick} type="submit" className="RobotLogoDiv">
        <img src={Robot} alt="RobotLogo" />
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
