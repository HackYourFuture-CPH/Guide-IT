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
