import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.component';
import QuestionComponent from '../../components/Question/Question.component';
import QuizAnswers from '../../components/QuizAnswers/QuizAnswers.component';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import Buttons from '../../components/Buttons/Buttons.component';
import ProgressBar from '../../components/ProgressBar/ProgressBar.component';
import { useFirebase } from '../../firebase/FirebaseContext';
import { useHistory } from 'react-router-dom';

import './QuizPage.styles.css';

export const QuizPage = () => {
  const [currentOn, setCurrentOn] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);

  const { auth } = useFirebase();
  const history = useHistory();

  const getAuthenticatedUser = async (firebaseToken) => {
    try {
      const response = await fetch('/api/users/current', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: firebaseToken,
        },
      });
      if (response.ok) {
        return response.json();
      }
      setError(await response.message());
    } catch (err) {
      setError(err.message);
    }
  };

  const getUserId = async () => {
    let userId = sessionStorage.getItem('quizUserId');
    if (!userId) {
      if (auth.currentUser) {
        const authenticatedUser = await getAuthenticatedUser(
          auth.currentUser.uid,
        );
        if (authenticatedUser) {
          userId = authenticatedUser.id;
          sessionStorage.setItem('quizUserId', userId);
        }
      } else {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({}),
        });
        if (response.ok) {
          const anonymousUser = await response.json();
          userId = anonymousUser.userId;
          sessionStorage.setItem('quizUserId', userId);
        } else {
          setError(await response.text());
        }
      }
    }
    return userId;
  };

  const handleQuestions = async () => {
    const userId = await getUserId();
    if (selectedAnswer !== undefined) {
      const response = await fetch('/api/quiz-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth.currentUser.uid,
        },
        body: JSON.stringify({
          fk_answer_id: selectedAnswer,
          fk_user_id: Number(userId),
        }),
      });

      if (currentOn !== questions.length - 1) {
        if (response.ok) {
          setCurrentOn((prev) => prev + 1);
          setSelectedAnswer(undefined);
        } else {
          const body = await response.text();
          setError(body);
        }
      }

      if (currentOn === questions.length - 1) {
        if (response.ok) {
          // go to results page

          history.push(`/quiz-results/${userId}`);
        } else {
          const body = await response.text();
          setError(body);
        }
      }
    }
  };

  const goToPrevious = () => {
    setCurrentOn((prev) => prev - 1);
  };

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
                  imageSrc={currentQuestion.image_url}
                  question={currentQuestion.question}
                />
                <div>
                  <QuizAnswers
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    isAgreementQuestion={currentQuestion.is_agreement_question}
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
                    onClick={handleQuestions}
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
