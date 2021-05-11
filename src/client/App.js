import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/fonts/fonts.css';

import { Home } from './containers/Home/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute.component';
import { useAuthentication } from './hooks/useAuthentication';

import Profile from './containers/Profile';
import Loader from './components/Loader';
import Error404Page from './containers/404Page/404Page.container';
import CareerPage from './containers/CareerPage/CareerPage.component';
import { QuizPage } from './containers/QuizPage/QuizPage.component';
import { QuizResultPage } from './containers/QuizResultPage/QuizResultPage.component';
import { EmptyQuizResultPage } from './containers/EmptyQuizResultPage/EmptyQuizResultPage.container';
import { ElevatorPitchPage } from './containers/ElevatorPitchPage/ElevatorPitchPage.component';
import { LoginPage } from './containers/LoginPage/LoginPage.component';
import { NextStepsPage } from './containers/NextStepsPage/NextStepsPage.component';
import { ProfilePage } from './containers/ProfilePage/ProfilePage.component';
import RegistrationPage from './containers/RegistrationPage/RegistrationPage.component';

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
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />
        <Route exact path="/error">
          <Error404Page />
        </Route>
        <Route exact path="/careerpage">
          <CareerPage />
        </Route>
        <Route exact path="/elevatorpitch">
          <ElevatorPitchPage />
        </Route>
        <Route exact path="/emptyquizresults">
          <EmptyQuizResultPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/nextsteps">
          <NextStepsPage />
        </Route>
        <Route exact path="/profilepage">
          <ProfilePage />
        </Route>
        <Route exact path="/quiz">
          <QuizPage />
        </Route>
        <Route exact path="/quizresults">
          <QuizResultPage />
        </Route>
        <Route exact path="/registrationpage">
          <RegistrationPage />
        </Route>

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/profile">
          <Profile />
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}

export default App;
