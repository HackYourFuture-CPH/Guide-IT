import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/fonts/fonts.css';
import { Home } from './containers/Home/Home.container';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute.component';
import { useAuthentication } from './hooks/useAuthentication';
import Profile from './containers/Profile';
import Loader from './components/Loader';
import { QuizResultPage } from './containers/QuizResultPage/QuizResultPage.component';
import CareerPage from './containers/CareerPage/CareerPage.component';
function App() {
  const { isLoading } = useAuthentication();
  const [career, setCareer] = useState('');
  const updateCareer = (title) => {
    setCareer(title);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz-results">
          {/* We are giving userId ==1 because issue 137 is 
        not done yet and we will get userId from issue 137 */}
          <QuizResultPage userId={1} updateCareer={updateCareer} />
        </Route>
        <Route exact path="/career">
          <CareerPage jobTitle={career} />
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
