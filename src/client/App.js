import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/fonts/fonts.css';

import { Home } from './containers/Home/Home.container';
import SignIn from './containers/SignIn/SignIn.container';
import SignUp from './containers/SignUp/SignUp.container';
import ResetPassword from './containers/ResetPassword/ResetPassword.container';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute.component';
import { useAuthentication } from './hooks/useAuthentication';
import Header from './components/Navigation/Header.component';
import Profile from './containers/Profile/Profile.container';
import Loader from './components/Loader/Loader.component';

function App() {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Anonymous pages */}
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/profile">
          <Profile />
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}

export default App;
