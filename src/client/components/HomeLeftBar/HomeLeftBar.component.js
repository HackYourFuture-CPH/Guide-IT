import React from 'react';
import './HomeLeftBar.styles.css';
import hyfLogo from '../../assets/images/hyf-logo.png';
import rediLogo from '../../assets/images/redi-logo.png';

function SidebarMenu() {
  return (
    <div className="sidebar-menu">
      <div className="sidebar-header">
        <div className="sidebar-title">GuideIT</div>
        <div className="create-account">
          <div>
            <a href="/">Create account</a>
          </div>
          <div className="triangle" />
        </div>

        <div className="login">
          <div>
            <a href="/">Login</a>
          </div>
          <div className="triangle" />
        </div>
      </div>
      <div className="sidebar-footer">
        <img src={hyfLogo} alt="HYF-logo" className="hyf-logo" />
        <img src={rediLogo} alt="REDI-logo" className="redi-logo" />
      </div>
    </div>
  );
}

export default SidebarMenu;
