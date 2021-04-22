import React from 'react';
import './sideMenu.styles.css';
import PropTypes from 'prop-types';
import homeImg from '../../assets/images/home_sidemenu.png';
import nextImg from '../../assets/images/nextsteps_sidemenu.png';
import elevatorImg from '../../assets/images/elevator_sidemenu.png';

function SideMenu({ highLigtItem }) {
  return (
    <div className="side_menu_div">
      <nav>
        <ul className="side_menu_ul">
          <li
            className="side_menu_spacebetween side_menu_whiteborder"
            data-highlighted={highLigtItem === 0}
          >
            <a href={highLigtItem}>
              <img src={homeImg} alt="homeImg" />
            </a>
          </li>
          <li className="side_menu_spacebetween">Home</li>
          <li
            className="side_menu_spacebetween side_menu_whiteborder"
            data-highlighted={highLigtItem === 1}
          >
            <a href={highLigtItem}>
              <img src={nextImg} alt="nextImg" />
            </a>
          </li>
          <li className="side_menu_spacebetween">Next steps</li>
          <li
            className="side_menu_spacebetween side_menu_whiteborder"
            data-highlighted={highLigtItem === 2}
          >
            <a href={highLigtItem}>
              <img src={elevatorImg} alt="nextImg" />
            </a>
          </li>
          <li className="side_menu_spacebetween">Elevator pitch</li>
        </ul>
      </nav>
    </div>
  );
}
export default SideMenu;
SideMenu.propTypes = {
  highLigtItem: PropTypes.number.isRequired,
};
