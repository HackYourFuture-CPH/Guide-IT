import React from 'react';
import Robot from '../../assets/images/robot_logo.png';
import './ProfileCareerResult.styles.css';
import PropTypes from 'prop-types';

const jobDetailsArray = [
  {
    jobTitle: 'Full stack developer',
    title: 'Full Stack Development',
    contents: [
      {
        contentHead: 'Full stack development',
        content:
          " includes any project where person works on both the front and back end of a site/app at the same time. It's any web development project that would normally require both a front end and back end developer-but instead...",
      },
    ],
  },
  {
    jobTitle: 'Data analyst',
    title: 'Data analysis',
    contents: [
      {
        contentHead: 'Data analysis',
        content:
          ' is the process of collecting and organizing data in order to draw helpful conclusions from it. The process of data analysis uses analytical and logical reasoning to gain information from the data.',
      },
      {
        contentHead: 'The main purpose',
        content: ' of data analysis is...',
      },
    ],
  },
  {
    jobTitle: 'UX designer',
    title: 'User Experience Design',
    contents: [
      {
        contentHead: 'User experience(UX)',
        content:
          ' is a term used to describe the overall experience a user has when interacting with a product or service.',
      },
      {
        contentHead: 'UX Design',
        content:
          ' considers each and every element that shapes the user experience...',
      },
    ],
  },
];

export default function ProfileCareerResult({ jobTitle }) {
  let chosenJobDetail = [];
  const chosenJob = jobDetailsArray.filter(
    (job) => job.jobTitle.toLowerCase() === jobTitle.toLowerCase(),
  );
  if (chosenJob.length >= 1) {
    [chosenJobDetail] = chosenJob;
  } else {
    [chosenJobDetail] = jobDetailsArray;
  }

  return (
    <div className="frame">
      <div className="profile-career-header">
        <img src={Robot} alt="robot" />
        <div className="robot-text">
          CAREER FOR YOU <div>IS</div>{' '}
        </div>
      </div>

      <div className="profile-career-body">
        <div className="profile-career-title">{chosenJobDetail.title}</div>
        <div className=".profile-career-details">
          {chosenJobDetail.contents.map((content) => (
            <p key={content.contentHead}>
              <strong>{content.contentHead}</strong>
              <span>{content.content}</span>
            </p>
          ))}
        </div>
        <a href={`/career/${jobTitle}`}>
          <p className="triangle"> </p>
        </a>
      </div>
    </div>
  );
}

ProfileCareerResult.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
