import React from 'react';
import Robot from '../../assets/images/robot_logo.png';
import background from '../../assets/images/Vector.svg';
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

  const words = chosenJobDetail.title.split(' ');

  return (
    <div
      className="frame"
      style={{ backgroundImage: `url(${background})`, width: '50%' }}
    >
      <div className="profile_career_header">
        <img src={Robot} alt="robot" />
        <div className="robo_text">
          CAREER FOR YOU <div>IS</div>{' '}
        </div>
      </div>

      <div className="profile_career_body">
        <div className="profile_career_title">
          {' '}
          {`${words[0]} ${words[1]}`}
          <p className="third_word">{words[2]}</p>
        </div>
        <div className=".profile_career_details">
          {chosenJobDetail.contents.map((content) => (
            <p>
              <strong>{content.contentHead}</strong>
              <span>{content.content}</span>
            </p>
          ))}
        </div>

        <a href="/career">
          <p className="triangle"> </p>
        </a>
      </div>
    </div>
  );
}

ProfileCareerResult.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
