import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../components/PageHeaderComponent/PageHeader';
import JobCard from '../../components/JobCard/JobCard';
import ResultJobFeatures from '../../components/ResultJobFeatures/ResultJobFeatures';
import Button from '../../components/Buttons/Buttons';
import CircuitBoardBackgroundImage from '../../assets/images/circuit_board_background_image.png';
import RobotLogo from '../../assets/images/robot_logo.png';
import ArrowImage from '../../assets/images/arrow_next.png';
import './QuizResultPage.css';

const alternateCareerArray = [
  {
    title: 'Full stack developer',
    alternate: ['Front end development', 'Back end development'],
  },
  {
    title: 'Data analyst',
    alternate: [],
  },
  {
    title: 'UX designer',
    alternate: ['User interface design'],
  },
];

const QuizResultPage = ({ jobTitle }) => {
  return (
    <div style={{ backgroundImage: `url(${CircuitBoardBackgroundImage})` }}>
      <PageHeader />
      <div className="sections">
        <div className="background-added-section">
          <div className="career-div">
            <div className="bigger-robot-div">
              <img src={RobotLogo} alt="Robot logo" />
              <p>CAREER</p>
              <p>FOR YOU IS</p>
            </div>
            <JobCard jobTitle={jobTitle} />
          </div>

          <div className="alternate-career-div">
            {jobTitle === 'Data analyst' ? (
              <div />
            ) : (
              <div className="smaller-robot-div">
                <img src={RobotLogo} alt="Robot logo" />
                <p>YOU MAY ALSO</p>
                <p>LIKE</p>
              </div>
            )}

            <div className="options-div">
              {jobTitle === 'Job title'
                ? ''
                : alternateCareerArray
                    .filter((option) => option.title === jobTitle)[0]
                    .alternate.map((careerOption) => {
                      if (careerOption !== undefined) {
                        return (
                          <div className="single-option-div">
                            <h2>{careerOption}</h2>{' '}
                            <span>
                              <img
                                className="arrow-image"
                                src={ArrowImage}
                                alt="Next_career"
                              />
                            </span>
                          </div>
                        );
                      }
                      return <div />;
                    })}
            </div>
          </div>
          <div className="buttons-result-page">
            <Button label="Retake quiz" size="big" color="grey" />
            <Button label="Elevator pitch" size="big" />
          </div>
        </div>
        <div>
          <ResultJobFeatures branchTitle={jobTitle} />
        </div>
      </div>
    </div>
  );
};

export default QuizResultPage;

QuizResultPage.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
