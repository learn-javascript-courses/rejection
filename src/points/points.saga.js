import { all, takeEvery, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './points-reducer';
import { clearScoreFromDB, savePoints, errorSavingPoints, fetchPoints } from '../lib/database';
// saga constants
const FETCH_POINTS = 'FETCH_POINTS';
const SAVE_POINTS = 'SAVE_POINTS';
const ERROR_FETCHING_POINTS = 'ERROR_FETCHING_POINTS';
const CLEAR_SCORE_FROM_DB = 'CLEAR_SCORE_FROM_DB';

// saga action creators
export const createFetchPoints = uid => ({
  type: FETCH_POINTS,
  uid
});
export const createSavePoints = points => ({
  type: SAVE_POINTS,
  points
});
export const reportFetchPointsError = error => ({
  type: ERROR_FETCHING_POINTS,
  error
});
export const createClearScore = () => ({
  type: CLEAR_SCORE_FROM_DB
});

// saga workers
export function* callFetchPoints(action) {
  try {
    const points = yield call(fetchPoints, action.uid);
  } catch (error) {
    yield put({ type: 'ERROR_FETCHING_POINTS', error });
  }
}

export function* callSavePoints({ points }) {
  try {
    const result = yield call(savePoints, points);
  } catch (err) {
    yield put({ type: 'ERROR_SAVING_POINTS', err });
  }
}
export function* callClearScore() {
  try {
    console.log('inside call clear score worker');
    yield call(clearScoreFromDB);
  } catch (error) {
    throw error;
  }
}

// saga watchers
export function* watchFetchPoints() {
  yield takeEvery(FETCH_POINTS, callFetchPoints);
}
export function* watchSavePoints() {
  yield takeEvery(SAVE_POINTS, callSavePoints);
}
export function* watchClearScore() {
  try {
    yield takeLatest(CLEAR_SCORE_FROM_DB, callClearScore);
  } catch (error) {
    throw error;
  }
}

// points root saga
export default function* pointsSaga() {
  yield [fork(watchSavePoints), fork(watchFetchPoints), fork(watchClearScore)];
}
