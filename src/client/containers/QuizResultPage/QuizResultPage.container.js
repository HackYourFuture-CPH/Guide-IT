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
  const history = useHistory();
  const [userId, setUserId] = useState('');
  const [career, setCareer] = useState('');
  const [professional, setProfessional] = useState([]);
  const [personal, setPersonal] = useState([]);
  const uxProfessional = ['design-oriented', 'creative', 'problem solver'];
  const uxPersonal = ['extrovert', 'detail oriented', 'patient'];
  const fullstackProfessional = [
    'good with debugging',
    'knows fundamental database concepts',
    'works well under pressure',
  ];
  const fullstackPersonal = [
    'problem solver',
    'super-planner(able to handle whole project development)',
    'patient',
  ];
  const dataAnalystProfessional = [
    'detail oriented',
    'proactive',
    'problem solver',
  ];
  const dataAnalystPersonal = ['communicative', 'critical thinking', 'patient'];

  useEffect(() => {
    setUserId(match.params.userId);
  }, []);

  useEffect(() => {
    if (userId !== '') {
      quizResultGetCareer(userId).then((userCareer) => {
        setCareer(userCareer);
      });
    }
  }, [userId]);

  async function careerSet() {
    if (career === 'UX designer') {
      setPersonal([...uxPersonal]);
      setProfessional([...uxProfessional]);
    } else if (career === 'Full stack developer') {
      setPersonal([...fullstackPersonal]);
      setProfessional([...fullstackProfessional]);
    } else if (career === 'Data analyst') {
      setPersonal([...dataAnalystPersonal]);
      setProfessional([...dataAnalystProfessional]);
    } else if (career === 'Error') {
      history.push('/empty-quiz-results');
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
        {career === '' && <div>Loading...</div>}
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
