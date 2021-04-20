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
        <div className="inline">
          <label className="radio radio_before">
            <span className="radio_label">Disagree</span>
            <span className="radio_input">
              <input
                type="radio"
                value="disagree"
                checked={selected === 'disagree'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span class="radio_control"></span>
            </span>
          </label>

          <label className="radio radio_before margin_left">
            <span className="radio_input">
              <input
                type="radio"
                value="neutral"
                checked={selected === 'neutral'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span class="radio_control small"></span>
            </span>
          </label>

          <label className="radio radio_before">
            <span className="radio_input">
              <input
                type="radio"
                value="agree"
                checked={selected === 'agree'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span class="radio_control"></span>
            </span>
            <span className="radio_label">Agree</span>
          </label>
        </div>
      ) : (
        <div>
          <label className="radio radio_before block">
            <span className="radio_input">
              <input
                type="radio"
                value="first_answer"
                checked={selected === 'first_answer'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span class="radio_control"></span>
            </span>
            <span className="radio_label">{firstAnswer}</span>
          </label>

          <label className="radio radio_before block">
            <span className="radio_input">
              <input
                type="radio"
                value="second_answer"
                checked={selected === 'second_answer'}
                onChange={(event) => handleSelectChange(event)}
              />
              <span class="radio_control"></span>
            </span>
            <span className="radio_label">{secondAnswer}</span>
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

export default QuizAnswers;
