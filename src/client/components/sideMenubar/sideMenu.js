import React from 'react';
import './sideMenu.styles.css';
import homeImg from '../../assets/images/home_sidemenu.png';
import nextImg from '../../assets/images/nextsteps_sidemenu.png';
import elevatorImg from '../../assets/images/elevator_sidemenu.png';

function SideMenu() {
  return (
    <div className="side_menu_div">
      <nav>
        <ul className="side_menu_ul">
          <li className="side_menu_whiteborder home">
            <img src={homeImg} alt="homeImg" />
          </li>
          <li className="side_menu_spacebetween">
            <a href="#dummylink">Home</a>
          </li>
          <li className="side_menu_whiteborder">
            <img src={nextImg} alt="nextImg" />
          </li>
          <li className="side_menu_spacebetween">
            <a href="#dummylink">Next steps</a>
          </li>
          <li className="side_menu_whiteborder">
            <img src={elevatorImg} alt="elevatorImg" />
          </li>
          <li className="side_menu_spacebetween">
            <a href="#dummylink">Elevetor pitch</a>
          </li>
        </ul>
      </nav>
      <div id="dummylink" />
    </div>
  );
}
export default SideMenu;
