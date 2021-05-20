import React from 'react';
import './GoogleLoginButton.styles.css';
import GoogleLogo from '../../assets/images/Google_logo.png';

const GoogleLoginButton = () => {
  return (
    <>
      <button className="google-login-button" type="submit">
        <img className="google-logo-img" alt="Google logo" src={GoogleLogo} />
        <span>Sign up with Google</span>
      </button>
    </>
  );
};

export default GoogleLoginButton;
