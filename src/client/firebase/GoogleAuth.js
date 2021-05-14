import * as firebase from 'firebase/app';
import 'firebase/auth';
// import { useFirebase } from './FirebaseContext';

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export async function signInGoogle() {
  // const { setAuth } = useFirebase();
  try {
    const result = await firebase
      .auth()
      .signInWithPopup(providers.googleProvider);
    await console.log(result.user.displayName, result);

    return result.user.displayName;
  } catch (err) {
    console.log(err);
  }
}

export function googleSignOut() {
  firebase.auth().signOut();
}
