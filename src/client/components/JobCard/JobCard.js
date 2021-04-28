import React from 'react';
import PropTypes from 'prop-types';
import './JobCard.styles.css';
import RobotLogo from '../../assets/images/robot_logo.png';

const jobDetailsArray = [
  {
    jobTitle: 'Full stack developer',
    title: 'Full stack development',
    contents: [
      {
        contentHead: 'Full stack development',
        content:
          " includes any project where person works on both the front and back end of a site/app at the same time. It's any web development project that would normally require both a front end and back end developer-but instead, a full stack developer fills the role of both.",
      },
      {
        contentHead: 'Full stack development',
        content:
          ' is a web developer or engineer who can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects.',
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
        content:
          ' of data analysis is to find meaning in data so that the derived knowledge can be used to make informed decision.',
      },
      {
        contentHead: 'A data analyst',
        content:
          ' collects, processes, and performs statistical analysis of data, making the data useful in one way or another way.',
      },
    ],
  },
  {
    jobTitle: 'UX designer',
    title: 'User experience design (UXD)',
    contents: [
      {
        contentHead: 'User experience(UX)',
        content:
          ' is a term used to describe the overall experience a user has when interacting with a product or service.',
      },
      {
        contentHead: 'UX Design',
        content:
          " considers each and every element that shapes the user experience. It's all about designing specifically for the needs of the user or customer, looking at things like ease of use, quality, and efficiency.",
      },
      {
        contentHead: 'As a UX desinger',
        content:
          " you're there to make products and technology usable, enjoyable, and accessible for humans.",
      },
    ],
  },
];

export default function JobCard({ jobTitle }) {
  let chosenJobDetail = [];
  const chosenJob = jobDetailsArray.filter(
    (job) => job.jobTitle.toLowerCase() === jobTitle.toLowerCase(),
  );
  if (chosenJob.length >= 1) {
    [chosenJobDetail] = chosenJob;
  } else {
    [chosenJobDetail] = jobDetailsArray;
  }

  const { branchTitle, title, contents } = chosenJobDetail;
  return (
    <div>
      <div className="job-card-container">
        <h1>{title}</h1>
        <div className="job-details-div">
          {contents.map((content) => (
            <p>
              <strong>{content.contentHead}</strong>
              <span>{content.content}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};
