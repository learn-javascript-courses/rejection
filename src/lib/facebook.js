import firebase from 'firebase';
import * as loginActions from '../Login/loginReducer';

export const facebookSignIn = () =>
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(result => {
      console.log('here in first then');
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
      return user;
    })
    .catch(error => {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
const facebookSignOut = () => firebase.auth().signOut();

export default {
  facebookSignIn,
  facebookSignOut
};
