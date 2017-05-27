import { all, takeEvery, call, fork, put } from 'redux-saga/effects';
import * as Actions from './list-reducer';
import { saveAskToDb, removeAskFromList, fetchAskList, saveAskList } from '../lib/database';

// constants
const CREATE_SAVE_ASK = 'CREATE_SAVE_ASK';
const CREATE_FETCH_ASK = 'CREATE_FETCH_ASK';
const ERROR_FETCHING_ASK = 'ERROR_FETCHING_ASK';
const DELETE_ASK_FROM_FIREBASE_LIST = 'DELETE_ASK_FROM_FIREBASE_LIST';

// action creators
export const createSaveAsk = ({ id, asked, person }) => ({
  type: CREATE_SAVE_ASK,
  id,
  asked,
  person
});
export const createFetchAsk = uid => ({
  type: CREATE_FETCH_ASK,
  uid
});
export const createErrorFetchingAsk = error => ({
  type: ERROR_FETCHING_ASK,
  error
});
export const createDeleteAskFromFirebaseList = id => ({
  type: DELETE_ASK_FROM_FIREBASE_LIST,
  id
});

// worker sagas
export function* callFetchAsk({ uid }) {
  try {
    yield call(fetchAskList, uid);
  } catch (error) {
    yield put(createErrorFetchingAsk(error));
  }
}
export function* callDeleteAskFromFirebaseList({ id }) {
  try {
    yield call(removeAskFromList, id);
  } catch (error) {
    console.warn('error here', error);
  }
}
export function* callSaveAskToDb({ id, asked, person }) {
  try {
    yield call(saveAskToDb, id, asked, person);
  } catch (error) {
    console.warn(error);
  }
}

// watcher sagas
export function* watchFetchAsk() {
  yield takeEvery(createFetchAsk, callFetchAsk);
}
export function* watchDeleteAskFromFirebaseList() {
  yield takeEvery(createDeleteAskFromFirebaseList, callDeleteAskFromFirebaseList);
}
export function* watchSaveAsk() {
  yield takeEvery(createSaveAsk, callSaveAskToDb);
}
// root sagas
export default function* listSaga() {
  yield [fork(watchFetchAsk), fork(watchDeleteAskFromFirebaseList), fork(watchSaveAsk)];
}
