import React from 'react';
import './404Page.styles.css';
import cable from '../../assets/images/cable.png';
import sadrobot from '../../assets/images/sadrobot.png';
import Buttons from '../../components/Buttons/Buttons.component';
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <div className="body-background-image">
      <div className="center-container">
        <img src={cable} className="cable" alt="cable" />

        <div className="main-text">
          <h1>404</h1>
          <p>page not found</p>
        </div>

        <div className="circle-container">
          <img src={sadrobot} alt="disappointed robot" />
          <p>Something went wrong!</p>
        </div>

        <div>
          <Link to="/">
            <Buttons label="Go Home" size="big" isMono={true} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404Page;
