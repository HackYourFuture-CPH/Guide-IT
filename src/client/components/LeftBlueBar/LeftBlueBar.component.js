import React from 'react';
import './LeftBlueBar.styles.css';
import hyfLogo from '../../assets/images/hyf-logo.png';
import rediLogo from '../../assets/images/redi-logo.png';
import GoogleLogo from '../../assets/images/Google_logo.png';
import { Link } from 'react-router-dom';

function SidebarMenu() {
  return (
    <div className="burger-menu">
      <input id="nav-toggle" type="checkbox" />
      <div className="sidebar-menu">
        <div className="sidebar-header">
          <div className="sidebar-title">GuideIT</div>
          {/* <div className="create-account">
            <div>
              <Link to="/registration">Create account</Link>
            </div>
            <div className="triangle" />
          </div> */}

          <div className="login">
            <img className="google_logo" alt="Google logo" src={GoogleLogo} />
            <div>
              <Link to="/registration">Login</Link>
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
