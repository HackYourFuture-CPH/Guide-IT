import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import QuestionComponent from '../../components/Question/Question.component';
import QuizAnswers from '../../components/QuizAnswers/QuizAnswers.component';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import Buttons from '../../components/Buttons/Buttons.component';
import ProgressBar from '../../components/ProgressBar/ProgressBar.component';
import { useHistory } from 'react-router-dom';

import './QuizPage.styles.css';

export const QuizPage = () => {
  const [currentOn, setCurrentOn] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);

  const handleQuestions = async () => {
    let userId = localStorage.getItem('anonymousUserId');
    if (!userId) {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      if (response.ok) {
        const user = await response.json();

        userId = user.userId;
        localStorage.setItem('anonymousUserId', userId);
      } else {
        setError(await response.text());
      }
    }
    if (selectedAnswer !== undefined) {
      const response = await fetch('/api/quiz-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fk_answer_id: selectedAnswer,
          fk_user_id: Number(userId),
        }),
      });
      if (response.ok) {
        setCurrentOn((prev) => prev + 1);
        setSelectedAnswer(undefined);
      } else {
        const body = await response.text();
      }
    }
  };

  const goToPrevious = () => {
    setCurrentOn((prev) => prev - 1);
  };

  const history = useHistory();

  function handleClick() {
    history.push('/resultPage');
  }

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/questions')
      .then(async (response) => {
        if (response.ok) {
          setQuestions(await response.json());
          setIsLoading(false);
        } else {
          setError(await response.message());
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const currentQuestion = questions && questions[currentOn];

  return (
    <div>
      <div className="main">
        <div className="header-page">
          <PageHeader />
        </div>
        <div className="middle-page">
          <div className="sidemenu-page">
            <SideMenu highLightItem={3} />
          </div>
          <div className="question-page">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {questions && (
              <>
                <QuestionComponent
                  imageSrc={currentQuestion.image}
                  question={currentQuestion.question}
                />
                <div>
                  <QuizAnswers
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    isAgreementQuestion={!currentQuestion.isAgreementQuestion}
                    answers={currentQuestion.answers}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        {questions && (
          <>
            <div className="button-page">
              {currentOn !== 0 && currentOn !== questions.length - 1 && (
                <span className="back-button">
                  <Buttons
                    label="Back"
                    color="grey"
                    size="big"
                    isMono={false}
                    onClick={goToPrevious}
                  />
                </span>
              )}
              {currentOn !== questions.length - 1 ? (
                <span className="next-button">
                  <Buttons
                    label="Next"
                    size="big"
                    isMono={false}
                    onClick={handleQuestions}
                  />
                </span>
              ) : (
                <span className="results">
                  <Buttons
                    label="See My Results"
                    size="big"
                    isMono={false}
                    onClick={handleClick}
                  />
                </span>
              )}
            </div>
          </>
        )}
        {questions && (
          <>
            <div className="progressbar-page">
              <ProgressBar
                level={((currentOn + 1) / questions.length) * 100}
                backgroundColor="white"
                alphaLevel={0.5}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
