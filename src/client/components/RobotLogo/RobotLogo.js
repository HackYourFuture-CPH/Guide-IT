import React from 'react';
import Robot from '../../assets/images/robot_logo.png';
import Arrow from '../../assets/images/arrow.png';
import './RobotLogo.css';

export default function RobotLogo() {
  return (
    <div className="RobotLogo">
      <div className="RobotLogoDiv">
        <img src={Robot} alt="RobotLogo" />
        <p>
          CARRER FOR <br />
          YOU IS
        </p>
      </div>
      <div className="arrow">
        <img src={Arrow} alt="RobotArrow" />
      </div>
    </div>
  );
}
