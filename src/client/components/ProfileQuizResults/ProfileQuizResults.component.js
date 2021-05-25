import React from 'react';
import background from '../../assets/images/Vector.svg';
import Robot from '../../assets/images/robot_logo.png';
import './ProfileQuizResults.styles.css';
import CardProfileResultComponent from '../CardProfileResult/CardProfileResult.component';
import PropTypes from 'prop-types';

function ProfileQuizResults({ personal, professional }) {
  return (
    <div style={{ backgroundImage: `url(${background})`, width: '100%' }}>
      <div className="quiz-results-header">
        <img src={Robot} alt="robot" />
        <span className="robot-text">QUIZ RESULTS</span>
      </div>
      <div className="results-container">
        <div className="personal-profile">
          <CardProfileResultComponent
            title="Your Personal Profile"
            results={personal}
          />
        </div>
        <div className="professional-profile">
          <CardProfileResultComponent
            title="Your Professional Profile"
            results={professional}
          />
        </div>
      </div>
    </div>
  );
}

ProfileQuizResults.propTypes = {
  personal: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
  professional: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ProfileQuizResults;
