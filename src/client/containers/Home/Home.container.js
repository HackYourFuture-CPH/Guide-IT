import React from 'react';
import SidebarMenu from '../../components/LeftBlueBar/LeftBlueBar.component';
import Header from '../../components/HomepageHeader/Header.component';
import HomeDescription from '../../components/HomeDescription/HomeDescription.component';
import { Description } from '../../components/DecriptionHome/DescriptionCareer.component';
import Buttons from '../../components/Buttons/Buttons.component';
import { useHistory } from 'react-router-dom';
import './Home.styles.css';

const arrayCareer = [
  {
    title: 'CAREER PATH ',
    content:
      'Curious about the possibilities within the IT-industry and want to know how to fit in job market?',
    content2: 'Then try out the quiz and see the answers.',
    duration: 3,
  },
];
const arrayPresent = [
  {
    title: 'PRESENT YOURSELF',
    content:
      'Interested in tips and advices that will help you grow professionally?',
    content2: 'Then climb up those professional stairs with our elevator.',
    duration: 5,
  },
];

export const Home = () => {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
  }
  return (
    <div className="home-container">
      <div className="home-side">
        <SidebarMenu />
      </div>
      <div className="home-main">
        <div className="home-header-container">
          <div>
            <Header color="#DB643D" fontSize={30} />
          </div>
          <div>
            <HomeDescription />
          </div>
        </div>

        <div className="home-path-container">
          <div className="exams-description">
            <Description exams={arrayCareer} />
            <div className="home-button">
              <div className="home-button-right">
                <Buttons
                  label="Take the career quiz"
                  size="big"
                  isMono={true}
                  color="orange"
                  onClick={() => handleClick('/quiz')}
                />
              </div>
            </div>
          </div>
          <div className="exams-description">
            <Description exams={arrayPresent} />
            <div className="home-button">
              <div className="home-button-left">
                <Buttons
                  label="Visit the elevator"
                  size="big"
                  isMono={true}
                  color="orange"
                  onClick={() => handleClick('/elevator-pitch')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
