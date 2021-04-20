import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuizAnswers.styles.css';

function QuizAnswers({ firstAnswer, secondAnswer, isAgreementQuestion }) {
  const [selected, setSelected] = useState('');
  return (
    <form>
      {isAgreementQuestion ? (
        <div className="radio">
          <label className="radio_label" htmlFor="disagree">
            Disagree
          </label>
          <span className="radio_input">
            <input
              type="radio"
              id="disagree"
              name="answer"
              value="disagree"
              selected={selected}
              onChange={setSelected}
            ></input>
          </span>

          <span className="radio_input small">
            <input
              type="radio"
              id="neutral"
              name="answer"
              value="neutral"
              selected={selected}
              onChange={setSelected}
            ></input>
          </span>

          <span className="radio_input">
            <input
              type="radio"
              id="agree"
              name="answer"
              value="agree"
              selected={selected}
              onChange={setSelected}
            ></input>
          </span>
          <label className="radio_label" htmlFor="agree">
            Agree
          </label>
        </div>
      ) : (
        <div className="multi_choice">
          <div>
            <input
              type="radio"
              id="first_answer"
              name="multi_choice"
              value="first answer"
            ></input>
            <span>{firstAnswer}</span>
          </div>
          <div>
            <input
              type="radio"
              id="second_answer"
              name="multi_choice"
              value="second answer"
            ></input>
            <span>{secondAnswer}</span>
          </div>
        </div>
      )}
    </form>
  );
}

QuizAnswers.propTypes = {
  firstAnswer: PropTypes.string.isRequired,
  secondAnswer: PropTypes.string.isRequired,
  isAgreementQuestion: PropTypes.bool.isRequired,
};

export default QuizAnswers;
