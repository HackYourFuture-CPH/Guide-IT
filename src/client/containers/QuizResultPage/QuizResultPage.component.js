import React, { useEffect, useState } from 'react';
import './QuizResultPage.styles.css';
import background from '../../assets/images/Vector.svg';
import Robot from '../../assets/images/robot_logo.png';
import RobotLogo from '../../components/RobotLogo/RobotLogo.component';
import CardProfileResultComponent from '../../components/CardProfileResult/CardProfileResult.component.js';
import RegisterTeaser from '../../components/RegisterTeaser/RegisterTeaser.component';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import { useHistory } from 'react-router-dom';
import { quizResultGetCareer } from './quizResultGetCareer.apiRequest';
export const QuizResultPage = ({ userId, updateCareer }) => {
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
  const dataAnalystPersonal = ['extrovert', 'detail oriented', 'patient'];
  async function careerSet() {
    const userCareer = await quizResultGetCareer(userId);
    if (userCareer === 'UX designer') {
      setPersonal([...uxPersonal]);
      setProfessional([...uxProfessional]);
      setCareer('UX designer');
      updateCareer('UX designer');
    } else if (userCareer === 'Full stack developer') {
      setPersonal([...fullstackPersonal]);
      setProfessional([...fullstackProfessional]);
      setCareer('Full stack developer');
      updateCareer('Full stack developer');
    } else if (userCareer === 'Data analyst') {
      setPersonal([...dataAnalystPersonal]);
      setProfessional([...DataAnalystProfessional]);
      setCareer('Data analyst');
      updateCareer('Data analyst');
    }
  }
  useEffect(() => {
    careerSet();
  }, []);
  const history = useHistory();
  const clickHandlerCareer = () => {
    history.push('/career');
  };
  const clickHandlerSignIn = () => {
    history.push('/login');
  };
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
                    {/* <RobotLogo /> */}
                  </div>
                  <div className="left-div-card">
                    <CardProfileResultComponent
                      title="Your Personal Profile"
                      results={personal}
                    />
                  </div>
                </div>
                <div className="left-div-register">
                  <RegisterTeaser onClick={clickHandlerSignIn} />
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
                  <RobotLogo onClick={clickHandlerCareer} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
