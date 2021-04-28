import React from 'react';
import './QuizResultPage.css';
import background from '../../assets/images/Vector.svg';
import Robot from '../../assets/images/robot_logo.png';
import RobotLogo from '../../components/RobotLogo/RobotLogo';
import CardProfileResultComponent from '../../components/CardProfileResult/CardProfileResultComponent.js';
import RegisterTeaser from '../../components/RegisterTeaser/RegisterTeaser';
import PageHeader from '../../components/PageHeaderComponent/PageHeader';

export const QuizResultPage = () => {
  const result = [
    'creative',
    'knows fundamental database concepts',
    'works well under pressure',
  ];

  const resultpersnol = [
    'extrovert',
    'detail-oriented',
    'super-planner (able to handle whole project development)',
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          border: '25px solid #d9e4e3',
        }}
      >
        <PageHeader />
        <div className="main-div">
          <div
            style={{
              backgroundColor: `#d9e4e3`,
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="left-div">
              <div className="left-div-robot">
                <img src={Robot} alt="robot-logo" />
                <p>
                  BASED ON <br />
                  QUIZ <br />
                  RESULTS
                </p>
                {/* <RobotLogo /> */}
              </div>
              <div className="left-div-card">
                <CardProfileResultComponent
                  title="Your Personal Profile"
                  results={resultpersnol}
                />
              </div>
            </div>
            <div className="left-div-register">
              <RegisterTeaser signInURL="#" />
            </div>
          </div>
          <div className="right-div">
            <div className="right-div-card">
              <CardProfileResultComponent
                title="Your Professional Profile"
                results={result}
              />
            </div>
            <div className="rigt-div-logo">
              <RobotLogo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
