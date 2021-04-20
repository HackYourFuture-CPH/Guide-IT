import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuizAnswers.styles.css';

function QuizAnswers({ isAgreementQuestion, firstAnswer, secondAnswer }) {
  const [selected, setSelected] = useState('');
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };

  return (
    <form>
      {isAgreementQuestion ? (
        <div className="radio">
          <label className="radio_label" htmlFor="disagree">
            Disagree
            <span className="radio_input">
              <input
                type="radio"
                value="disagree"
                checked={selected === 'disagree'}
                onChange={(event) => handleSelectChange(event)}
              ></input>
            </span>
          </label>

          <span className="radio_input small">
            <input
              type="radio"
              value="neutral"
              checked={selected === 'neutral'}
              onChange={(event) => handleSelectChange(event)}
            ></input>
          </span>

          <span className="radio_input">
            <input
              type="radio"
              value="agree"
              checked={selected === 'agree'}
              onChange={(event) => handleSelectChange(event)}
            ></input>
          </span>
          <label className="radio_label" htmlFor="agree">
            Agree
          </label>
        </div>
      ) : (
        <div className="radio">
          <div>
            <span className="radio_input">
              <input
                type="radio"
                value="first_answer"
                checked={selected === 'first_answer'}
                onChange={(event) => handleSelectChange(event)}
              ></input>
            </span>
            <label className="radio_label">{firstAnswer}</label>
          </div>
          <div>
            <span className="radio_input">
              <input
                type="radio"
                value="second_answer"
                checked={selected === 'second_answer'}
                onChange={(event) => handleSelectChange(event)}
              ></input>
            </span>
            <label className="radio_label">{secondAnswer}</label>
          </div>
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

export default QuizAnswers;
