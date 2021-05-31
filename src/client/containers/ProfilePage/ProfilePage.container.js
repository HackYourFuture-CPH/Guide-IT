import React, { useState, useEffect } from 'react';
import Avatar from '../../components/ProfileForm/ProfileForm.component.js';
import avatarImage from '../../assets/images/avatar.png';
import ProfileBlueBar from '../../components/ProfileBlueBar/ProfileBlueBar.component.js';
import vector from '../../assets/images/Vector.svg';
import './ProfilePage.styles.css';
import ProfileQuizResults from '../../components/ProfileQuizResults/ProfileQuizResults.component';
import ProfileCareerResult from '../../components/ProfileCareerResult/ProfileCareerResult.component';
import { useFirebase } from '../../firebase/FirebaseContext';
import { useHistory } from 'react-router-dom';
import { quizResultGetCareer } from '../QuizResultPage/quizResultGetCareer.apiRequest';

const ProfilePage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  //  users id, career, personal, professional states
  const [userId, setUserId] = useState();
  const [career, setCareer] = useState('');
  const [professional, setProfessional] = useState([]);
  const [personal, setPersonal] = useState([]);
  //  personal, professional array's for different careers
  const uxProfessional = ['detailed oriented', 'proactive', 'problem solver'];
  const uxPersonal = ['communicative', 'critical thinking', 'patient'];
  const fullstackProfessional = [
    'good with debugging',
    'knows fundamental database concepts',
    'works well under pressure',
  ];
  const fullstackPersonal = [
    'problem solver',
    'super-planner(able to handle whole project development)',
    'patient',
  ];
  const DataAnalystProfessional = [
    'design-oriented',
    'creative',
    'problem solver',
  ];
  const dataAnalystPersonal = ['extrovert', 'detail oriented', 'patient'];
  //  career set function
  async function careerSet() {
    if (career === 'UX designer') {
      setPersonal([...uxPersonal]);
      setProfessional([...uxProfessional]);
    } else if (career === 'Full stack developer') {
      setPersonal([...fullstackPersonal]);
      setProfessional([...fullstackProfessional]);
    } else if (career === 'Data analyst') {
      setPersonal([...dataAnalystPersonal]);
      setProfessional([...DataAnalystProfessional]);
    }
  }
  // users signout and getting current user function
  const { signOutGoogle, getCurrentUser } = useFirebase();
  const history = useHistory();
  const user = getCurrentUser();
  useEffect(
    function () {
      if (user) {
        const fullName = user[0].displayName;
        const firstName = fullName.split(' ')[0];
        setUserName(firstName);
        setUserEmail(user[0].email);
        setPhotoUrl(user[0].photoURL ? user[0].photoURL : avatarImage);
        //  fetching all the users, and filtering the current user to get userId  from users
        fetch('/api/users')
          .then((res) => res.json())
          .then((users) => {
            const currentUser = users.filter(
              (userObj) => userObj.full_name === fullName,
            );
            const currentUserId = currentUser[0].id;
            setUserId(currentUserId);
          });
      }
    },
    [user, userName, userId],
  );
  useEffect(() => {
    // user career result
    if (userId) {
      quizResultGetCareer(userId).then((userCareer) => {
        setCareer(userCareer);
      });
    }
  }, [userId, career]);
  useEffect(() => {
    // users quiz results
    careerSet();
  }, [career]);
  // users sign out function
  const handleSignOut = () => {
    signOutGoogle();
    setUserName('');
    history.push('/');
  };
  return (
    <>
      {user && (
        <div className="profile-page-container">
          <img
            src={vector}
            className="profilepage-background"
            alt="background"
          />
          <div className="profile-blue-bar">
            <ProfileBlueBar userName={userName} handleSignOut={handleSignOut} />
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
                  userName={userName}
                  userEmail={userEmail}
                  userImage={photoUrl}
                />
              </div>
            </div>
            <div className="profile-content-right">
              <div className="profile-quiz-container">
                <ProfileQuizResults
                  personal={personal}
                  professional={professional}
                />
              </div>
              <div className="profile-career-container">
                <ProfileCareerResult jobTitle={career} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
