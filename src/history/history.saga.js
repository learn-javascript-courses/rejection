import cuid from 'cuid';
import { fork, put, all, takeEvery, call } from 'redux-saga/effects';
import * as db from '../lib/database';

const SAVE_ASK_TO_HISTORY = 'SAVE_ASK_TO_HISTORY';
const ERROR_SAVING_ASK = 'ERROR_SAVING_ASK';

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

export const createErrorSavingAskToHistory = error => ({
  type: ERROR_SAVING_ASK,
  error
});

// worker sagas
export function* callSaveAskToHistory({ id, asked, person, time, result }) {
  try {
    yield call(db.saveAnsweredAsk, id, asked, person, time, result);
  } catch (error) {
    yield put(createErrorSavingAskToHistory(error));
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
export default function* historySaga() {
  yield [fork(watchSaveAskToHistory)];
}
