import React from 'react';
import './Side_menu.styles.css';

function Side_menu() {
  return (
    <div className="side_menu_div">
      <nav>
        <ul className="side_menu_ul">
          <li className="side_menu_whiteborder home">
            <img src={require('../../assets/images/home_sidemenu.png')}></img>
          </li>
          <li className="side_menu_spacebetween">
            <a href="#">Home</a>
          </li>
          <li className="side_menu_whiteborder">
            <img
              src={require('../../assets/images/nextsteps_sidemenu.png')}
            ></img>
          </li>
          <li className="side_menu_spacebetween">
            <a href="#">Next steps</a>
          </li>
          <li className="side_menu_whiteborder">
            <img
              src={require('../../assets/images/elevator_sidemenu.png')}
            ></img>
          </li>
          <li className="side_menu_spacebetween">
            <a href="#">Elevetor pitch</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Side_menu;
