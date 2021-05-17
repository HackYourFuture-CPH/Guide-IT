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

  const onClick = async () => {
    setIsLoading(true);

    const result = await signInGoogle();
    // using the variable names same names as in the database
    // eslint-disable-next-line
    const full_name = result.user.displayName;
    // eslint-disable-next-line
    const firebase_token = result.user.uid;
    if (result) {
      const fetchUsers = await fetch('/api/users');
      const users = await fetchUsers.json();
      const user = users.find((userInfo) => {
        return userInfo.firebase_token === firebase_token;
      });

      if (user === undefined) {
        await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name,
            firebase_token,
          }),
        });
      }
      setIsLoading(false);
      history.push(`profile/${firebase_token}`);
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
