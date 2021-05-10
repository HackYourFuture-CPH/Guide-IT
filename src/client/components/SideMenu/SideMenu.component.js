import React from 'react';
import './SideMenu.styles.css';
import homeImg from '../../assets/images/home_sidemenu.png';
import nextImg from '../../assets/images/nextsteps_sidemenu.png';
import elevatorImg from '../../assets/images/elevator_sidemenu.png';
import { NavLink } from 'react-router-dom';

function SideMenu() {
  return (
    <div className="side_menu_div">
      <nav className="side_menu_spacebetween">
        <ul className="side_menu_ul">
          <NavLink to="/">
            <li className="side_menu_whiteborder">
              <img src={homeImg} alt="homeImg" />
            </li>
          </NavLink>
          <span>Home</span>
          <NavLink to="/nextsteps" activeClassName="side_menu_selected">
            <li className="side_menu_whiteborder">
              <img src={nextImg} alt="nextImg" />
            </li>
          </NavLink>
          <span>Next steps</span>
          <NavLink to="/elevatorpitch" activeClassName="side_menu_selected">
            <li className="side_menu_whiteborder">
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
