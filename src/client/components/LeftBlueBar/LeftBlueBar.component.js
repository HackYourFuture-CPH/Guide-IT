import React from 'react';
import './LeftBlueBar.styles.css';
import hyfLogo from '../../assets/images/hyf-logo.png';
import rediLogo from '../../assets/images/redi-logo.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function SidebarMenu() {
  return (
    <div className="burger-menu">
      <input id="nav-toggle" type="checkbox" />
      <div className="sidebar-menu">
        <div className="sidebar-header">
          <div className="sidebar-title">GuideIT</div>
          <Router>
            <div className="create-account">
              <div>
                <Link to="/registration">Create account</Link>
              </div>
              <div className="triangle" />
            </div>

            <div className="login">
              <div>
                <Link to="/login">Login</Link>
              </div>
              <div className="triangle" />
            </div>
          </Router>
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
