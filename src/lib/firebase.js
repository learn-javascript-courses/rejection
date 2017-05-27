import firebase from 'firebase';
import config from './config.secret';

export default () => {
  try {
    firebase.initializeApp(config);
  } catch (err) {
    // Skip the "already exists" message which is not an error when hot-reloading
    if (!/already exists/.test(err.message)) {
      console.log(`Firebase initialization error => ${err}`);
    }
  }
};
