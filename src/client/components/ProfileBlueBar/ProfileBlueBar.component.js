import React from 'react';
import backArrow from '../../assets/images/profile_back_arrow.png';
import './ProfileBlueBar.styles.css';
import PropTypes from 'prop-types';

export default function ProfileBlueBar({ userName, handleSignOut }) {
  return (
    <div className="profile-bar-container">
      <div className="profile-bar-content">
        <h2 className="profile-bar-title">GuideIT</h2>
        <h4 className="profile-bar-name">Hello, {userName}</h4>
      </div>
      <div className="profile-bar-footer">
        <button
          type="button"
          className="profile-bar-log-out"
          onClick={handleSignOut}
        >
          Logout
        </button>
        <div className="profile-bar-footer-container">
          <img src={backArrow} alt="back arrow" />
          <a href="/" className="profile-bar-back">
            Back
          </a>
        </div>
      </div>
    </div>
  );
}
ProfileBlueBar.propTypes = {
  userName: PropTypes.string.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};
