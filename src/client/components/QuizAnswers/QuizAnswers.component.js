import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuizAnswers.styles.css';

function QuizAnswers({ isAgreementQuestion, firstAnswer, secondAnswer }) {
  const [selected, setSelected] = useState('');
  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(value);
  };

  return (
    <form>
      {isAgreementQuestion ? (
        <div className="inline">
          <label className="radio radio-before">
            <span className="radio-label">Disagree</span>
            <span className="radio-input">
              <input
                type="radio"
                value="disagree"
                checked={selected === 'disagree'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span className="radio-control" />
            </span>
          </label>

          <label className="radio radio-before margin-left">
            <span className="radio-input">
              <input
                type="radio"
                value="neutral"
                checked={selected === 'neutral'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span className="radio-control small" />
            </span>
          </label>

          <label className="radio radio-before">
            <span className="radio-input">
              <input
                type="radio"
                value="agree"
                checked={selected === 'agree'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span className="radio-control" />
            </span>
            <span className="radio-label">Agree</span>
          </label>
        </div>
      ) : (
        <div>
          <label className="radio radio-before block">
            <span className="radio-input">
              <input
                type="radio"
                value="first-answer"
                checked={selected === 'first-answer'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span className="radio-control" />
            </span>
            <span className="radio-label">{firstAnswer}</span>
          </label>

          <label className="radio radio-before block">
            <span className="radio-input">
              <input
                type="radio"
                value="second-answer"
                checked={selected === 'second-answer'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span className="radio-control" />
            </span>
            <span className="radio-label">{secondAnswer}</span>
          </label>
        </div>
      )}
    </form>
  );
}

QuizAnswers.propTypes = {
  isAgreementQuestion: PropTypes.bool.isRequired,
  firstAnswer: PropTypes.string,
  secondAnswer: PropTypes.string,
};

QuizAnswers.defaultProps = {
  firstAnswer: '',
  secondAnswer: '',
};

export default QuizAnswers;
