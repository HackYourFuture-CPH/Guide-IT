import React, { useState } from 'react';
import './GoogleLoginButton.styles.css';
import GoogleLogo from '../../assets/images/Google_logo.png';
import { useFirebase } from '../../firebase/FirebaseContext';
import Loader from '../Loader/index';
import { useHistory } from 'react-router-dom';

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const { signInGoogle } = useFirebase();
  // login function for google button
  const onClick = async () => {
    setIsLoading(true);

    const result = await signInGoogle();
    // using the variable names same names as in the database

    const fullName = result.user.displayName;
    const firebaseToken = result.user.uid;
    if (result) {
      const fetchUsers = await fetch('/api/users');
      const users = await fetchUsers.json();
      const user = users.find((userInfo) => {
        return userInfo.firebase_token === firebaseToken;
      });
      //  if the user is not signed up before, adding the user to database.

      if (user === undefined) {
        await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // disabling camelcase eslint for data base variables
            // eslint-disable-next-line
            full_name: fullName,
            // eslint-disable-next-line
            firebase_token: firebaseToken,
          }),
        });
      }
      setIsLoading(false);
      history.push('/profile-page');
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <button className="google_login_button" type="submit" onClick={onClick}>
        <img className="google_logo_img" alt="Google logo" src={GoogleLogo} />
        <span>Sign up with Google</span>
      </button>
    </>
  );
};

export default GoogleLoginButton;
