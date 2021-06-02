import React, { useState, useEffect } from 'react';
import './LeftBlueBar.styles.css';
import hyfLogo from '../../assets/images/hyf-logo.png';
import rediLogo from '../../assets/images/redi-logo.png';
import GoogleLogo from '../../assets/images/Google_logo.png';
import { useFirebase } from '../../firebase/FirebaseContext';
import { Link } from 'react-router-dom';

function SidebarMenu() {
  const [user, setUser] = useState(false);
  const { auth } = useFirebase();

  useEffect(() => {
    if (auth.currentUser) {
      setUser(true);
    }
  }, [auth.currentUser]);
  return (
    <div className="burger-menu">
      <input id="nav-toggle" type="checkbox" />
      <div className="sidebar-menu">
        <div className="sidebar-header">
          <div className="sidebar-title">GuideIT</div>
          <div className="login">
            <div className="login-text">
              {user ? (
                <Link to="/profile-page">My Profile</Link>
              ) : (
                <>
                  <img
                    className="google_logo"
                    alt="Google logo"
                    src={GoogleLogo}
                  />
                  <Link to="/registration">Login</Link>
                </>
              )}
            </div>
            <div className="triangle" />
          </div>
        </div>
        <div className="sidebar-footer">
          <img src={hyfLogo} alt="HYF-logo" className="hyf-logo" />
          <img src={rediLogo} alt="REDI-logo" className="redi-logo" />
        </div>
      </div>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </label>
    </div>
  );
}

export default SidebarMenu;
