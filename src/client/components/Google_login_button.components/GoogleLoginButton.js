import React from 'react';
import './GoogleLoginButton.css';
import GoogleLogo from '../../assets/images/Google_logo.png';

const GoogleLoginButton = () => {
  return (
    <>
      <button className="google_login_button" type="submit">
        <img
          className="google_logo_img"
          alt="Google_logo_for_login"
          src={GoogleLogo}
        />
        <span>Sign up with Google</span>
      </button>
    </>
  );
};

export default GoogleLoginButton;
