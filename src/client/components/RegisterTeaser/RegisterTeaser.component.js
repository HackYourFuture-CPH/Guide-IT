import React from 'react';
import './RegisterTeaser.styles.css';
import robotLogo from '../../assets/images/robot_logo.png';
import { Link } from 'react-router-dom';

export default function RegisterTeaser() {
  return (
    <div className="register-teaser">
      <div>
        <img src={robotLogo} alt="RobotLogo" />
      </div>
      <div className="register-teaser-text">
        <p>
          Do you want to save your results?
          <br />{' '}
          <Link to="/registration" className="sign-in">
            Sign in{' '}
          </Link>{' '}
          and check your results any time.
        </p>
      </div>
    </div>
  );
}
