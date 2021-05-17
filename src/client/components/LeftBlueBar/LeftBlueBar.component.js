import React, { useEffect, useState } from 'react';
import './LeftBlueBar.styles.css';
import hyfLogo from '../../assets/images/hyf-logo.png';
import rediLogo from '../../assets/images/redi-logo.png';
import { useParams } from 'react-router-dom';
import { useFirebase } from '../../firebase/FirebaseContext';
import Buttons from '../Buttons/Buttons.component';

function SidebarMenu() {
  const [userName, setUserName] = useState('');
  const params = useParams();
  const { signOutGoogle } = useFirebase();
  useEffect(function () {
    fetch('/api/users')
      .then((users) => users.json())
      .then((userInfo) => {
        const currentUser = userInfo.find((user) => {
          return user.firebase_token === params.firebase_id;
        });
        const fullName = currentUser.full_name;
        const firstName = fullName.split(' ')[0];
        setUserName(firstName);
      });
  }, []);

  // sign out function
  const signOut = () => {
    signOutGoogle();
  };

  return (
    <div className="sidebar-menu">
      <div className="sidebar-header">
        <div className="sidebar-title">GuideIT</div>
        {userName ? (
          <h2 className="user-name">Hello {userName}</h2>
        ) : (
          <>
            <div className="create-account">
              <div>
                <a href="/">Create account</a>
              </div>
              <div className="triangle" />
            </div>

            <div className="login">
              <div>
                <a href="/">Login</a>
              </div>
              <div className="triangle" />
            </div>
          </>
        )}
      </div>
      {userName ? (
        <Buttons label="Sign Out" color="black" size="big" onClick={signOut}>
          Sign Out{' '}
        </Buttons>
      ) : (
        <div className="sidebar-footer">
          <img src={hyfLogo} alt="HYF-logo" className="hyf-logo" />
          <img src={rediLogo} alt="REDI-logo" className="redi-logo" />
        </div>
      )}
    </div>
  );
}

export default SidebarMenu;
