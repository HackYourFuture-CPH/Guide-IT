import React, { useState, useEffect } from 'react';
import backArrow from '../../assets/images/profile_back_arrow.png';
import { useFirebase } from '../../firebase/FirebaseContext';
import { useHistory } from 'react-router-dom';
import './ProfileBlueBar.styles.css';

export default function ProfileBlueBar() {
  const [userName, setUserName] = useState('');
  const { signOutGoogle, getCurrentUser } = useFirebase();
  const history = useHistory();

  useEffect(
    function () {
      const user = getCurrentUser();
      if (user) {
        const fullName = user[0].displayName;
        const firstName = fullName.split(' ')[0];
        setUserName(firstName);
      }
    },
    [getCurrentUser],
  );

  // sign out function
  const signOut = () => {
    signOutGoogle();
    setUserName('');
    history.push('/');
  };
  return (
    <div className="profile-bar-container">
      <div className="profile-bar-content">
        <h2 className="profile-bar-title">GuideIT</h2>
        <h4 className="profile-bar-name">Hello, {userName}</h4>
      </div>
      <div className="profile-bar-footer">
        <button type="button" className="profile-bar-log-out" onClick={signOut}>
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
