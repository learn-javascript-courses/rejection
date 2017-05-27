import cuid from 'cuid';
import { fork, put, all, takeEvery, call } from 'redux-saga/effects';
import * as db from '../lib/database';

// constants
const SAVE_ASK_TO_HISTORY = 'SAVE_ASK_TO_HISTORY';
const ERROR_SAVING_ASK = 'ERROR_SAVING_ASK';
const CLEAR_HISTORY_FROM_DB = 'CLEAR_HISTORY_FROM_DB';
const DELETE_SPECIFIC_ITEM_FROM_HISTORY = 'DELETE_SPECIFIC_ITEM_FROM_HISTORY';

export const createSaveAskToHistory = (
  { id = cuid(), time = Date.now(), person = 'Me', asked = 'Money', result = 'REJECTED' } = {}
) => ({
  type: SAVE_ASK_TO_HISTORY,
  id,
  time,
  person,
  asked,
  result
});

// action creators
export const createErrorSavingAskToHistory = error => ({
  type: ERROR_SAVING_ASK,
  error
});
export const createClearHistoryFromDb = (uid = 1) => ({
  type: CLEAR_HISTORY_FROM_DB,
  uid
});
export const createDeleteSpecificItemFromHistory = (id, uid = 1) => ({
  type: DELETE_SPECIFIC_ITEM_FROM_HISTORY,
  id,
  uid
});
// worker sagas
export function* callSaveAskToHistory({ id, asked, person, time, result }) {
  try {
    yield call(db.saveAnsweredAsk, id, asked, person, time, result);
  } catch (error) {
    yield put(createErrorSavingAskToHistory(error));
  }
}
export function* callClearHistoryFromDb({ uid }) {
  try {
    yield call(db.clearHistoryFromDb, uid);
  } catch (error) {
    throw error;
  }
}
export function* callDeleteSpecificItemFromHistory({ id, uid }) {
  try {
    yield call(db.deleteSpecificHistoryItem, id, uid);
  } catch (error) {
    throw error;
  }
}
// watcher sagas
export function* watchSaveAskToHistory() {
  try {
    yield takeEvery(SAVE_ASK_TO_HISTORY, callSaveAskToHistory);
  } catch (err) {
    yield put(createErrorSavingAskToHistory(err));
  }
}
export function* watchClearHistoryFromDb() {
  try {
    yield takeEvery(CLEAR_HISTORY_FROM_DB, callClearHistoryFromDb);
  } catch (error) {
    throw error;
  }
}
export function* watchDeleteSpecificItemFromHistory() {
  try {
    yield takeEvery(DELETE_SPECIFIC_ITEM_FROM_HISTORY, callDeleteSpecificItemFromHistory);
  } catch (error) {
    throw error;
  }
}
export default function* historySaga() {
  yield [
    fork(watchDeleteSpecificItemFromHistory),
    fork(watchSaveAskToHistory),
    fork(watchClearHistoryFromDb)
  ];
}
