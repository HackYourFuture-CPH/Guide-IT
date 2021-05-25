import React from 'react';
import Robot from '../../assets/images/robot_logo.png';
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
    <div>
      <div className="quiz-results-header">
        <img src={Robot} alt="robot" />
        <span className="robot-text">QUIZ RESULTS</span>
      </div>
      <div className="results-container">
        <div className="personal-profile">
          <CardProfileResultComponent
            title="Your Personal Profile"
            results={resultpersonal}
          />
        </div>
        <div className="professional-profile">
          <CardProfileResultComponent
            title="Your Professional Profile"
            results={result}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileQuizResults;
