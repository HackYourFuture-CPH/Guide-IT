import React, { useEffect, useState } from 'react';
import './LeftBlueBar.styles.css';
import hyfLogo from '../../assets/images/hyf-logo.png';
import rediLogo from '../../assets/images/redi-logo.png';
import { useFirebase } from '../../firebase/FirebaseContext';
import Buttons from '../Buttons/Buttons.component';
import { useHistory } from 'react-router-dom';

function SidebarMenu() {
  const [userName, setUserName] = useState('');
  const { signOutGoogle, getCurrentUser } = useFirebase();
  const history = useHistory();

  useEffect(function () {
    const user = getCurrentUser();
    if (user) {
      const fullName = user[0].displayName;
      const firstName = fullName.split(' ')[0];
      setUserName(firstName);
    }
  }, []);

  // sign out function
  const signOut = () => {
    signOutGoogle();
    setUserName('');
    history.push('/');
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
          Sign Out
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
