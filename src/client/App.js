import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/fonts/fonts.css';

import { Home } from './containers/Home/Home.container';

import { useAuthentication } from './hooks/useAuthentication';

import Loader from './components/Loader';
import Error404Page from './containers/404Page/404Page.container';
import CareerPage from './containers/CareerPage/CareerPage.container';
import { QuizPage } from './containers/QuizPage/QuizPage.container';
import { QuizResultPage } from './containers/QuizResultPage/QuizResultPage.container';
import { EmptyQuizResultPage } from './containers/EmptyQuizResultPage/EmptyQuizResultPage.container';
import ProfilePage from './containers/ProfilePage/ProfilePage.container';
import { ElevatorPitchPage } from './containers/ElevatorPitchPage/ElevatorPitchPage.container';

import { NextStepsPage } from './containers/NextStepsPage/NextStepsPage.container';
import RegistrationPage from './containers/RegistrationPage/RegistrationPage.container';

function App() {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Anonymous pages */}
        <Route path="/career/:jobTitle" component={CareerPage} />
        <Route exact path="/elevator-pitch">
          <ElevatorPitchPage />
        </Route>
        <Route exact path="/empty-quiz-results">
          <EmptyQuizResultPage />
        </Route>
        <Route exact path="/next-steps">
          <NextStepsPage />
        </Route>
        <Route exact path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/quiz-results/:userId" component={QuizResultPage} />
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route exact path="/profile-page">
          <ProfilePage />
        </Route>
        <Route>
          <Error404Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
