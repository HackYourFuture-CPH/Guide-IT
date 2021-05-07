import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.components';
import QuestionComponent from '../../components/Question/Question.component';
import QuizAnswers from '../../components/QuizAnswers/QuizAnswers.components';
import SideMenu from '../../components/sideMenubar/sideMenu.component';
import Buttons from '../../components/Buttons/Buttons.component';
import ProgressBar from '../../components/ProgressBar/ProgressBar.components';
import image1 from '../../assets/images/questionBackgrounds/question1background.png';
import image2 from '../../assets/images/questionBackgrounds/question2background.png';
import image3 from '../../assets/images/questionBackgrounds/question3background.png';
import image4 from '../../assets/images/questionBackgrounds/question4background.png';
import image5 from '../../assets/images/questionBackgrounds/question5background.png';
import PropTypes from 'prop-types';
import './QuizPage.styles.css';

const QuizQuestions = [
  {
    question: 'When visiting a website,what is that you are most intrested in?',
    image: image1,
    isAgreementQuestion: false,
    firstAnswer: 'How the website looks and how easy it is for the users',
    secondAnswer: 'Logic behind how the website is built',
    level: 20,
  },
  {
    question:
      'I can easily notice changes around me including people,culture,trends,etc.',
    image: image2,
    isAgreementQuestion: true,
    firstAnswer: '',
    secondAnswer: '',
    level: 40,
  },
  {
    question:
      'When I have a list of tasks to do,I prefer to multitask rather than focusing on singular tasks one at a time',
    image: image3,
    isAgreementQuestion: true,
    firstAnswer: '',
    secondAnswer: '',
    level: 60,
  },
  {
    question: 'I can easily understan what someone else is going through',
    image: image4,
    isAgreementQuestion: true,
    firstAnswer: '',
    secondAnswer: '',
    level: 80,
  },
  {
    question: 'I work well under pressure',
    image: image5,
    isAgreementQuestion: true,
    firstAnswer: '',
    secondAnswer: '',
    level: 100,
  },
];
export const QuizPage = () => {
  const [currentOn, setCurrentOn] = useState(0);
  const handleQuestions = () => {
    setCurrentOn((prev) => prev + 1);
  };
  const goToPrevious = () => {
    setCurrentOn((prev) => prev - 1);
  };
  console.log(currentOn, QuizQuestions.length - 1);
  return (
    <div>
      <div className="main">
        <div className="header_page">
          <PageHeader />
        </div>
        <div className="middle_page">
          <div className="sidemenu_page">
            <SideMenu highLightItem={3} />
          </div>
          <div className="question_page">
            <QuestionComponent
              imageSrc={QuizQuestions[currentOn].image}
              question={QuizQuestions[currentOn].question}
            />
            <div>
              <QuizAnswers
                isAgreementQuestion={
                  QuizQuestions[currentOn].isAgreementQuestion
                }
                firstAnswer={QuizQuestions[currentOn].firstAnswer}
                secondAnswer={QuizQuestions[currentOn].secondAnswer}
              />
            </div>
          </div>
        </div>
        <div className="button_page">
          {currentOn !== 0 && currentOn !== QuizQuestions.length - 1 && (
            <span className="back_button">
              <Buttons
                label="Back"
                color="grey"
                size="big"
                isMono={false}
                onClick={goToPrevious}
              />
            </span>
          )}
          {currentOn !== QuizQuestions.length - 1 ? (
            <span className="next_button">
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
                onClick={getResults}
              />
            </span>
          )}
        </div>
        <div className="progressbar_page">
          <ProgressBar
            level={QuizQuestions[currentOn].level}
            backgroundColor="white"
            alphaLevel={0.5}
          />
        </div>
      </div>
    </div>
  );
};
