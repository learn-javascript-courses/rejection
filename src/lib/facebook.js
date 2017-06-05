import firebase from 'firebase';
import * as loginActions from '../Login/loginReducer';

const provider = new firebase.auth.FacebookAuthProvider();
export const facebookSignIn = () => firebase.auth().signInWithPopup(provider);
export const facebookSignOut = () => firebase.auth().signOut();
export default {
  facebookSignIn,
  facebookSignOut
};
