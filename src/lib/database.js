import firebase from 'firebase';

const database = () => firebase.database();

// list functions
export const addAsk = (id, asked, person, result, time, uid = 1) => {
  database().ref(`/${uid}/asks/${id}`).push({
    id,
    asked,
    person,
    result,
    time
  });
};
export const fetchAskList = (uid = 1) => {
  database().ref(`/${uid}/asks`);
};
export const removeAskFromList = (id, uid = 1) => {
  database().ref(`/${uid}/asks/${id}`).remove();
};
export const saveAskToDb = (id, person, asked, uid = 1) => {
  database().ref(`/${uid}/asks/${id}`).push({ person, asked, id });
};

// history functions
export const saveAnsweredAsk = (id, asked, person, time, result, uid = 1) => {
  database()
    .ref(`/${uid}/history/${id}`)
    .push({
      id,
      asked,
      person,
      time,
      result
    })
    .then(() => removeAskFromList())
    .catch(err => {
      throw err;
    });
};
export const clearHistoryFromDb = (uid = 1) => {
  database().ref(`/${uid}/history/`).remove();
};
export const deleteSpecificHistoryItem = (id, uid = 1) => {
  database().ref(`/${uid}/history/${id}`).remove();
};
// points functions
export const savePoints = (points, uid = 1) => {
  database().ref(`/${uid}/points`).update({ points });
};
export const fetchPoints = (uid = 1) => {
  database().ref(`/${uid}/points`);
};
export const clearScoreFromDB = (uid = 1) => {
  database().ref(`/${uid}/points`).remove();
};
// error
export const errorSavingPoints = error => {
  throw error;
};
