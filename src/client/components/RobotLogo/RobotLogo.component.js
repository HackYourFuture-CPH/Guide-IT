import React from 'react';
import Robot from '../../assets/images/robot_logo.png';

import './RobotLogo.styles.css';

export default function RobotLogo() {
  return (
    <div className="robot-logo">
      <button type="submit" className="robot-logo-div">
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
