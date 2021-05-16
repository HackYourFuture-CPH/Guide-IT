import React, { useEffect, useState } from 'react';
import './QuizResultPage.styles.css';
import background from '../../assets/images/Vector.svg';
import Robot from '../../assets/images/robot_logo.png';
import RobotLogo from '../../components/RobotLogo/RobotLogo.component';
import CardProfileResultComponent from '../../components/CardProfileResult/CardProfileResult.component.js';
import RegisterTeaser from '../../components/RegisterTeaser/RegisterTeaser.component';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import { Link, useHistory } from 'react-router-dom';
import { quizResultGetCareer } from './quizResultGetCareer.apiRequest';

export const QuizResultPage = ({ match }) => {
  const [userId, setuserId] = useState('');
  const [career, setCareer] = useState('');
  const [professional, setProfessional] = useState([]);
  const [personal, setPersonal] = useState([]);
  const uxProfessional = ['detailed orineted', 'proactive', 'problem solver'];
  const uxPersonal = ['communicative', 'critical thinking', 'patient'];
  const fullstackProfessional = [
    'good with debugging',
    'knows fundamental database concepts',
    'work well under pressure',
  ];
  const fullstackPersonal = [
    'problem solver',
    'super-planner(able to handle whole project development)',
    'patient',
  ];
  const DataAnalystProfessional = [
    'design-oriented',
    'creative',
    'problem solver',
  ];

  useEffect(() => {
    setuserId(match.params.userId);
  }, []);

  useEffect(() => {
    quizResultGetCareer(userId).then((userCareer) => {
      setCareer(userCareer);
    });
  }, [userId]);

  const dataAnalystPersonal = ['extrovert', 'detail oriented', 'patient'];
  async function careerSet() {
    if (career === 'UX designer') {
      setPersonal([...uxPersonal]);
      setProfessional([...uxProfessional]);
    } else if (career === 'Full stack developer') {
      setPersonal([...fullstackPersonal]);
      setProfessional([...fullstackProfessional]);
    } else if (career === 'Data analyst') {
      setPersonal([...dataAnalystPersonal]);
      setProfessional([...DataAnalystProfessional]);
    }
  }
  useEffect(() => {
    careerSet();
  }, [career]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: '100%',
        }}
      >
        <PageHeader />
        {career == '' && <div>Loading...</div>}
        {career !== '' && (
          <>
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
                  </div>
                  <div className="left-div-card">
                    <CardProfileResultComponent
                      title="Your Personal Profile"
                      results={personal}
                    />
                  </div>
                </div>
                <div className="left-div-register">
                  <RegisterTeaser />
                </div>
              </div>
              <div className="right-div">
                <div className="right-div-card">
                  <CardProfileResultComponent
                    title="Your Professional Profile"
                    results={professional}
                  />
                </div>
                <div className="rigt-div-logo">
                  <Link to={`/career/${career}`}>
                    <RobotLogo />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
