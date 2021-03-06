import React from 'react';
import PropTypes from 'prop-types';
import './QuizAnswers.styles.css';

function QuizAnswers({
  selectedAnswer,
  setSelectedAnswer,
  isAgreementQuestion,
  answers,
}) {
  return (
    <form>
      <div className={isAgreementQuestion === 1 ? 'inline answers' : 'answers'}>
        {answers.map((answer, index) => {
          const isMiddle = index !== 0 && index !== answers.length - 1;
          return (
            <label key={answer.id} className="radio radio-before">
              <span className="radio-input">
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === answer.id}
                  onChange={() => setSelectedAnswer(answer.id)}
                />
                <span
                  className={
                    isAgreementQuestion === 1 && isMiddle
                      ? 'radio-control small'
                      : 'radio-control'
                  }
                />
              </span>
              {!(isAgreementQuestion === 1 && isMiddle) && (
                <span className="radio-label">{answer.answer}</span>
              )}
            </label>
          );
        })}
      </div>
    </form>
  );
}

QuizAnswers.propTypes = {
  selectedAnswer: PropTypes.number,
  setSelectedAnswer: PropTypes.func.isRequired,
  isAgreementQuestion: PropTypes.number.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

QuizAnswers.defaultProps = {
  selectedAnswer: undefined,
};

export default QuizAnswers;
