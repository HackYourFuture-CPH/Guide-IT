import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import JobCard from '../../components/JobCard/JobCard';
import ResultJobFeatures from '../../components/ResultJobFeatures/ResultJobFeatures';
import RobotLogo from '../../assets/images/robot_logo.png';
import ArrowImage from '../../assets/images/arrow_next.png';
import Button from '../../components/Buttons/Buttons.component';
import { useHistory } from 'react-router-dom';
import './CareerPage.styles.css';

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

const CareerPage = ({ jobTitle }) => {
  const history = useHistory();
  // onclick
  const handleClick = () => {
    history.push('/quiz');
  };
  // onclick for elevator
  const onClickElevator = () => {
    history.push('/elevatorpitch');
  };

  return (
    <div className="career-page">
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
                    .find((option) => option.title === jobTitle)
                    .alternate.map((careerOption) => (
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
                    ))}
            </div>
          </div>
          <div className="buttons-result-page">
            <Button
              label="Retake quiz"
              size="big"
              color="grey"
              isMono={true}
              onClick={handleClick}
            />

            <Button
              label="Elevator pitch"
              size="big"
              isMono={true}
              onClick={onClickElevator}
            />
          </div>
        </div>
        <div>
          <ResultJobFeatures branchTitle={jobTitle} />
        </div>
      </div>
    </div>
  );
};

export default CareerPage;

CareerPage.propTypes = {
  jobTitle: PropTypes.string,
};
CareerPage.defaultProps = {
  jobTitle: 'Full stack developer',
};
