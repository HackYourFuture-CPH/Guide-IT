import React from 'react';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import Header from '../../components/HomepageHeader/Header';
import HomeDescription from '../../components/HomeDescription/HomeDescription';
import { Description } from '../../components/DecriptionHome/DescriptionCareer';
import Buttons from '../../components/Buttons/Buttons';

import './Home.css';

const arr = [
  {
    title: 'CAREER PATH ',
    content:
      'Curious about the possibilities within the IT-industry and want to know how to fit in job market?',
    content2: 'Then try out the quiz and see the answers.',
    duration: 3,
  },
  {
    title: 'PRESENT YOURSELF',
    content:
      'Interested in tips and advices that will help you grow professionally?',
    content2: 'Then climb up those professional stairs with our elevator.',
    duration: 5,
  },
];

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-side">
        <SidebarMenu />
      </div>
      <div className="home-main">
        <div>
          <Header color="#DB643D" fontSize="30" />
        </div>
        <div className="home-description">
          <HomeDescription />
        </div>
        <div className="exams-description">
          <Description exams={arr} />
        </div>
        <div className="home-button">
          <div className="home-button-right">
            <Buttons
              label="Take the career quiz"
              size="big"
              isMono={true}
              color="orange"
            />
          </div>
          <div className="home-button-left">
            <Buttons
              label="Visit the elevator"
              size="big"
              isMono={true}
              color="orange"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
