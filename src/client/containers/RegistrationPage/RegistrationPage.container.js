import React from 'react';
import robotLogo from '../../assets/images/robot_logo.png';
import GoogleLoginButton from '../../components/GoogleLoginButton/GoogleLoginButton.component.js';
import vector from '../../assets/images/Vector.svg';
import './RegistrationPage.styles.css';

const RegistrationPage = () => {
  return (
    <div>
      <img src={vector} className="registration-background" alt="background" />
      <div className="registration-page-container">
        <div className="registration-small-container">
          <div className="registration-page">
            <div>
              <h1 className="registration-page-title">Sign In</h1>
            </div>
            <div className="rp-google-login-button">
              <GoogleLoginButton />
            </div>
          </div>
          <div className="logo-div">
            <h1 className="rp-logo-name">GuideIT</h1>
            <img src={robotLogo} className="robot-logo-img" alt="robot logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationPage;
