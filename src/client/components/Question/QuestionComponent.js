import React from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.styles.css';
import BackButtonComponent from '../Buttons/BackButton/BackButtonComponent';
import NextButtonComponent from '../Buttons/NextButton/NextButtonComponent';

export default function QuestionComponent({
  question,
  imageSrc,
  options,
  selectedOption,
  onOptionChange,
  children,
  onClick,
}) {
  return (
    <div className="question-component">
      <div
        className="question-box"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <p className="question">{question}</p>
      </div>
      {/* These next lines are the logic that controlls whether answer options are listed (multichoice) */}
      {/* If no options are given, it assumes an agree scale for the answer */}
      {options === null ? (
        <div className="question-options-agree-scale">
          <label className="question-option-label">
            Disagree
            <input
              type="radio"
              name="answer"
              checked={selectedOption === 0}
              onChange={() => onOptionChange(0)}
            />
          </label>
          <label className="question-option-label">
            <input
              type="radio"
              name="answer"
              checked={selectedOption === 1}
              onChange={() => onOptionChange(1)}
            />
          </label>
          <label className="question-option-label">
            <input
              type="radio"
              name="answer"
              checked={selectedOption === 2}
              onChange={() => onOptionChange(2)}
            />
            Agree
          </label>
        </div>
      ) : (
        <div className="question-options-multi-choice">
          {options.map((option, i) => {
            return (
              <label className="question-option-label">
                <input
                  type="radio"
                  name="answer"
                  checked={selectedOption === i}
                  onChange={() => onOptionChange(i)}
                />
                {option}
              </label>
            );
          })}
        </div>
      )}
      {/* Need to add back and next buttons in here as children once they have been created. */}
      {/* Q1 will not have a back button */}
      {/* Last question will not have a next button */}
      {children}
      <div className="buttons-box">
        <BackButtonComponent onClick={onClick} />
        <NextButtonComponent onClick={onClick} />
      </div>
    </div>
  );
}

QuestionComponent.propTypes = {
  question: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  selectedOption: PropTypes.number,
  onOptionChange: PropTypes.func,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

QuestionComponent.defaultProps = {
  options: null,
  selectedOption: null,
  onOptionChange: null,
  onClick: null,
};
