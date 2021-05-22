import React from 'react';
import Avatar from '../../components/ProfileForm/ProfileForm.component.js';
import avatarImage from '../../assets/images/avatar.png';
import ProfileBlueBar from '../../components/ProfileBlueBar/ProfileBlueBar.component.js';
import vector from '../../assets/images/Vector.svg';
import './ProfilePage.styles.css';
import ProfileQuizResults from '../../components/ProfileQuizResults/ProfileQuizResults.component';
import ProfileCareerResult from '../../components/ProfileCareerResult/ProfileCareerResult.component';

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <img src={vector} className="profilepage-background" alt="background" />
      <div className="profile-blue-bar">
        <ProfileBlueBar />
      </div>
      <div className="profile-content-container">
        <div className="profile-content-left">
          <div className="profile-page-title">
            <h1>Your Account</h1>
          </div>
          <div className="profile-page-avatar">
            <Avatar
              color="#535C75"
              width="300"
              fontFamily="Roboto Mono"
              userName="Anne"
              userEmail="anne@gmail.com"
              userPassword="xxxxxxxxxxxx"
              userImage={avatarImage}
            />
          </div>
        </div>
        <div className="profile-content-right">
          <div className="profile-quiz-container">
            <ProfileQuizResults />
          </div>
          <div className="profile-career-container">
            <ProfileCareerResult jobTitle="Full stack development" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
