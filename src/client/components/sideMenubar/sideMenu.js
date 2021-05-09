import React from 'react';
import './sideMenu.styles.css';
import PropTypes from 'prop-types';
import homeImg from '../../assets/images/home_sidemenu.png';
import nextImg from '../../assets/images/nextsteps_sidemenu.png';
import elevatorImg from '../../assets/images/elevator_sidemenu.png';
import { Link } from 'react-router-dom';

function SideMenu({ highLightItem }) {
  return (
    <div className="side_menu_div">
      <nav className="side_menu_spacebetween">
        <ul className="side_menu_ul">
          <li
            className="side_menu_whiteborder"
            data-highlighted={highLightItem === 0}
          >
            <Link to="/" href={highLightItem}>
              <img src={homeImg} alt="homeImg" />
            </Link>
          </li>
          <span>Home</span>
          <li
            className="side_menu_whiteborder"
            data-highlighted={highLightItem === 1}
          >
            <Link to="/nextsteps" href={highLightItem}>
              <img src={nextImg} alt="nextImg" />
            </Link>
          </li>
          <span>Next steps</span>
          <li
            className="side_menu_whiteborder"
            data-highlighted={highLightItem === 2}
          >
            <Link to="/elevatorpitch" href={highLightItem}>
              <img src={elevatorImg} alt="nextImg" />
            </Link>
          </li>
          <span>Elevator pitch</span>
        </ul>
      </nav>
    </div>
  );
}
export default SideMenu;
SideMenu.propTypes = {
  highLightItem: PropTypes.number.isRequired,
};
