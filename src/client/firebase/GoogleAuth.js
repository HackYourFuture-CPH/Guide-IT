import * as firebase from 'firebase/app';
import 'firebase/auth';
import { handleAuthErrors } from './auth';

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export async function signInGoogle() {
  try {
    const result = await firebase
      .auth()
      .signInWithPopup(providers.googleProvider);
    return result;
  } catch (error) {
    handleAuthErrors(error);
  }
}

export function signOutGoogle() {
  firebase.auth().signOut();
}
export function getCurrentUser() {
  let user = firebase.auth().currentUser;
  if (user != null) {
    user = user.providerData.map(function (profile) {
      return profile;
    });
  }
  return user;
}
