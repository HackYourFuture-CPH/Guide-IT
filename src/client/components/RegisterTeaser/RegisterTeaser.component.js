import React from 'react';
import './RegisterTeaser.styles.css';
import PropTypes from 'prop-types';
import robotLogo from '../../assets/images/robot_logo.png';
export default function RegisterTeaser({ onClick }) {
  return (
    <div className="register-teaser">
      <div>
        <img src={robotLogo} alt="RobotLogo" />
      </div>
      <div className="register-teaser-text">
        <p>
          Do you want to save your results?
          <br />{' '}
          <span onClick={onClick} className="sign-in">
            Sign in{' '}
          </span>{' '}
          and check your results any time.
        </p>
      </div>
    </div>
  );
}
RegisterTeaser.propTypes = {
  signInURL: PropTypes.string.isRequired,
};
