import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import Buttons from '../../components/Buttons/Buttons.component';
import girlImg from '../../assets/images/girl.png';
import sadrobot from '../../assets/images/sadrobot.png';
import { useHistory } from 'react-router-dom';
import './EmptyQuizResultPage.styles.css';

export const EmptyQuizResultPage = () => {
  const history = useHistory();

  // onclick function for button
  function handleClick() {
    history.push('/');
  }

  return (
    <section>
      <div className="noresults-page">
        <div className="sidebar">
          <SideMenu />
        </div>
        <div className="noresults-container">
          <h2 className="noresults-text">No results!</h2>
          <img src={girlImg} className="girl-img" alt="girl playing" />
          <div className="robo-container">
            <div className="sadrobo">
              <img src={sadrobot} alt="disappointed robo face" />
            </div>
            <p className="sadrobo-text">You`ve skipped too many questions</p>
          </div>
          <Buttons
            label="Go Home"
            size="big"
            isMono={true}
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};
