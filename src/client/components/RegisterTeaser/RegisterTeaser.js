import React from 'react';
import './RegisterTeaser.css';
import PropTypes from 'prop-types';
import robotLogo from '../../assets/images/robot_logo.png';

export default function RegisterTeaser({ singInURL }) {
  return (
    <div className="RegisterTeaser">
      <div>
        <img src={robotLogo} alt="RobotLogo" />
      </div>
      <div className="RegisterTeaserText">
        <p>
          Do you want to save your results?
          <br /> <a href={singInURL}>Sign in</a> and check your results any
          time.
        </p>
      </div>
    </div>
  );
}
RegisterTeaser.propTypes = {
  singInURL: PropTypes.string.isRequired,
};
