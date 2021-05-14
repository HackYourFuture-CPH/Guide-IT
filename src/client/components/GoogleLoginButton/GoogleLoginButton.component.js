import React from 'react';
import './GoogleLoginButton.styles.css';
import GoogleLogo from '../../assets/images/Google_logo.png';
import { useFirebase } from '../../firebase/FirebaseContext';
import Loader from '../Loader/index';
import { useHistory } from 'react-router-dom';

// import { auth } from 'firebase';

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const history = useHistory();

  const { auth, signInGoogle, googleSignOut } = useFirebase();

  const onClick = async () => {
    setIsLoading(true);
    const name = await signInGoogle();
    setUserName(name);
    setIsLoading(false);
    console.log(auth);
    // alert(name)
  };
  const google = () => {
    setUserName('');
    const abc = googleSignOut();
    history.push('/');
    console.log('sign out button', abc);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <button className="google_login_button" type="button" onClick={onClick}>
        <img className="google_logo_img" alt="Google logo" src={GoogleLogo} />
        <span>Sign up with Google</span>
      </button>
      {userName && <h2>HI {userName}</h2>}
      <button type="button" onClick={google}>
        Sign out
      </button>
    </>
  );
};

export default GoogleLoginButton;
