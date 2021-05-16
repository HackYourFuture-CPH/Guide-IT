import React from 'react';
import robotLogo from '../../assets/images/robot_logo.png';
import GoogleLoginButton from '../../components/GoogleLoginButton/GoogleLoginButton.component.js';
import EmailRegistration from '../../components/EmailRegistration/EmailForm.component.js';
import vector from '../../assets/images/Vector.svg';
import './RegistrationPage.styles.css';
import arrowBack from '../../assets/images/arrow_back.png';

const RegistrationPage = () => {
  return (
    <div>
      <img src={vector} className="registration-background" alt="background" />
      <div className="registrationPage-container">
        <div className="registration-small-container">
          <div className="registration-page">
            <div>
              <h1 className="registration-page-title">Create New Account</h1>
              <h5 className="account">
                Already have an account?{' '}
                <a href="#login" className="signin-link">
                  Sign In
                </a>
              </h5>
            </div>
            <div className="rp-google-login-button">
              <GoogleLoginButton />
            </div>
            <div className="rp-horizontal-line">
              <table className="hrTable">
                <tr>
                  <td>
                    <hr />
                  </td>
                  <span>or</span>
                  <td>
                    <hr />
                  </td>
                </tr>
              </table>
            </div>
            <EmailRegistration formWidth={80} />
            <div className="back-button">
              <img src={arrowBack} alt="back arrow" />
              <span>Back</span>
            </div>
          </div>
          <div className="logo-div">
            <h1 className="rp-logo-name">GuideIT</h1>
            <img src={robotLogo} className="robot_logo_img" alt="robot logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationPage;
