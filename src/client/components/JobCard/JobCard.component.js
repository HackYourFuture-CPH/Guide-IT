import React from 'react';
import PropTypes from 'prop-types';
import './JobCard.styles.css';

export default function JobCard({ title, content }) {
  return (
    <div className="job-card-container">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
