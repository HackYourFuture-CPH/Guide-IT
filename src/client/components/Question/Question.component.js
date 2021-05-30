import React from 'react';
import PropTypes from 'prop-types';
import './Question.styles.css';

export default function QuestionComponent({ question, imageSrc }) {
  return (
    <div
      className="question-box"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        minHeight: 400,
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <p className="question">{question}</p>
    </div>
  );
}

QuestionComponent.propTypes = {
  question: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
