import firebase from 'firebase';

const database = () => firebase.database();

// list functions
export const fetchAskList = (uid = 1) => {
  const data = database().ref(`/${uid}/asks`).once('value').val();
};
export const saveAskToDb = ({ id, person, asked, result, uid = 1 }) => {
  result = result === undefined ? null : result;
  database().ref(`/${uid}/asks/${id}`).update({ id, person, asked, result });
};
export const removeAskFromDb = ({ id, person, asked, result, uid = 1 }) => {
  database().ref(`/${uid}/asks/`).removeValue(id);
};
