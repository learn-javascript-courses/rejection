import firebase from 'firebase';

const database = () => firebase.database();

// list functions
export const fetchAskList = uid => database().ref(`/${uid}/asks`).once('value');
export const saveAskToDb = ({ id, person, asked, result = null, uid, deleted = false }) => {
  database().ref(`/${uid}/asks/${id}`).update({ id, person, asked, result, deleted });
};
export const removeAskFromDb = ({ id, person, asked, result, uid }) => {
  database().ref(`/${uid}/asks/`).removeValue(id);
};
export const updateAskWithDeleted = ({ uid, id }) =>
  database().ref(`/${uid}/asks/${id}`).update({ deleted: true });
