import { all, takeEvery, call, fork, put } from 'redux-saga/effects';
import * as Actions from './points-reducer';
import { savePoints, errorSavingPoints, fetchPoints } from '../lib/database';
// saga constants
const FETCH_POINTS = 'FETCH_POINTS';
const SAVE_POINTS = 'SAVE_POINTS';
const ERROR_FETCHING_POINTS = 'ERROR_FETCHING_POINTS';

// saga action creators
export const createFetchPoints = uid => ({
  type: FETCH_POINTS,
  uid
});
export const createSavePoints = ({ uid, points }) => ({
  type: SAVE_POINTS,
  uid,
  points
});
export const reportFetchPointsError = error => ({
  type: ERROR_FETCHING_POINTS,
  error
});

// saga workers
export function* callFetchPoints(action) {
  try {
    const points = yield call(fetchPoints, action.uid);
  } catch (error) {
    yield put({ type: 'ERROR_FETCHING_POINTS', error });
  }
}

export function* callSavePoints({ id, points }) {
  try {
    const result = yield call(savePoints, id, points);
  } catch (err) {
    yield put({ type: 'ERROR_SAVING_POINTS', err });
  }
}

// saga watchers
export function* watchFetchPoints() {
  yield takeEvery(FETCH_POINTS, callFetchPoints);
}
export function* watchSavePoints() {
  yield takeEvery(SAVE_POINTS, callSavePoints);
}

// points root saga
export default function* pointsSaga() {
  yield [fork(watchSavePoints), fork(watchFetchPoints)];
}
