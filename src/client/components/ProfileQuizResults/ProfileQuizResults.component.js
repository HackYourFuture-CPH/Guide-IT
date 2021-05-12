import React from 'react';
import background from '../../assets/images/Vector.svg';
import Robot from '../../assets/images/robot_logo.png';
import PropTypes from 'prop-types';
import './ProfileQuizResults.styles.css';
import CardProfileResultComponent from '../CardProfileResult/CardProfileResult.component';

function ProfileQuizResults() {
  const result = [
    'creative',
    'knows fundamental database concepts',
    'works well under pressure',
  ];

  const resultpersonal = [
    'extrovert',
    'detail-oriented',
    'super-planner (able to handle whole project development)',
  ];

  return (
    <div style={{ backgroundImage: `url(${background})`, width: '100%' }}>
      <div className="quiz_results_header">
        <img src={Robot} alt="robot"></img>
        <span className="robo_text">QUIZ RESULTS</span>
      </div>
      <div className="results_container">
        <div className="personal_profile">
          <CardProfileResultComponent
            title="Your Personal Profile"
            results={resultpersonal}
          />
        </div>
        <div className="professional_profile">
          <CardProfileResultComponent
            title="Your Professional Profile"
            results={result}
            style={{ backgroundColor: '#e9f4f4' }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileQuizResults;
