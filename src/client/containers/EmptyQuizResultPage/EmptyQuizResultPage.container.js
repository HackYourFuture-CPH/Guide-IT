import React from 'react';
import SideMenu from '../../components/sideMenubar/sideMenu.component';
import Buttons from '../../components/Buttons/Buttons.component';
import girlImg from '../../assets/images/girl.png';
import sadrobot from '../../assets/images/sadrobot.png';
import { Link } from 'react-router-dom';
import './EmptyQuizResultPage.styles.css';

export const EmptyQuizResultPage = () => {
  // onclick function for button
  const onClick = () => {
    return null;
  };
  return (
    <section>
      <div className="noresults_page">
        <div className="sidebar">
          <SideMenu highLightItem={3} />
        </div>
        <div className="noresults_container">
          <h2 className="noresults_text">No results!</h2>
          <img src={girlImg} className="girl_img" alt="girlplaying" />
          <div className="robo_container">
            <div className="sadrobo">
              <img src={sadrobot} alt="disappointed robo face" />
            </div>
            {/* <div  */}
            <p className="sadrobo_text">You`ve skipped too many questions</p>
            {/* </div> */}
          </div>
          <Link to="/">
            <Buttons
              label="Go Home"
              size="big"
              isMono={true}
              onClick={onClick}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
