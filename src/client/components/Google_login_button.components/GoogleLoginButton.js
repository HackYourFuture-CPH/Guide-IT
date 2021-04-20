import React from 'react';
import './GoogleLoginButton.css';
import GoogleLogo from '../../assets/images/Google_logo.png';

const GoogleLoginButton = ({ font }) => {
  return (
    <>
      <button
        className="google_login_button"
        type="submit"
        style={{ fontFamily: `${font}` }}
      >
        <img className="google_logo_img" alt="Google logo" src={GoogleLogo} />
        <span>Sign up with Google</span>
      </button>
    </>
  );
};

GoogleLoginButton.defaultProps = {
  font: 'Roboto',
};

export default GoogleLoginButton;
