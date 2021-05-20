import React from 'react';
import './SideMenu.styles.css';
import homeImg from '../../assets/images/home_sidemenu.png';
import nextImg from '../../assets/images/nextsteps_sidemenu.png';
import elevatorImg from '../../assets/images/elevator_sidemenu.png';
import { NavLink } from 'react-router-dom';

function SideMenu() {
  return (
    <div className="side-menu-div">
      <nav className="side-menu-spacebetween">
        <ul className="side-menu-ul">
          <NavLink to="/">
            <li className="side-menu-whiteborder">
              <img src={homeImg} alt="homeImg" />
            </li>
          </NavLink>
          <span>Home</span>
          <NavLink to="/nextsteps" activeClassName="side-menu-selected">
            <li className="side-menu-whiteborder">
              <img src={nextImg} alt="nextImg" />
            </li>
          </NavLink>
          <span>Next steps</span>
          <NavLink to="/elevatorpitch" activeClassName="side-menu-selected">
            <li className="side-menu-whiteborder">
              <img src={elevatorImg} alt="nextImg" />
            </li>
          </NavLink>
          <span>Elevator pitch</span>
        </ul>
      </nav>
    </div>
  );
}
export default SideMenu;
