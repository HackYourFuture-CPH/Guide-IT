import React from 'react';
import './QuizPage.styles.css';
import PageHeader from '../../components/PageHeaderComponent/PageHeader';
import QuestionComponent from '../../components/Question/QuestionComponent';
import QuizAnswers from '../../components/QuizAnswers/QuizAnswers';
import SideMenu from '../../components/sideMenubar/sideMenu';
import Buttons from '../../components/Buttons/Buttons';
import ProgressBar from '../../components/ProgressBar.components/ProgressBar';
import image1 from '../../assets/images/questionBackgrounds/question1background.png';
export const QuizPage = () => {
  return (
    <>
      <div>
        <PageHeader />
      </div>
      <div className="middle_page">
        <div className="sidemenu_page">
          <SideMenu />
        </div>
        <div className="question_page">
          <QuestionComponent
            imageSrc={image1}
            question="When visiting a website, what is that you are most interested in?"
          />
          <div className="quizans_page">
            <QuizAnswers
              firstAnswer="How the website looks and how easy it is for the users"
              secondAnswer="Logic behind how the website is built"
            />
          </div>
        </div>
      </div>
      <div className="button_page">
        <Buttons label="Next" size="big" isMono="false" />
      </div>
      <div className="progressbar_page">
        <ProgressBar />
      </div>
    </>
  );
};
