import { all, take, takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as Actions from './list-reducer';
import { removeAskFromDb, saveAskToDb, fetchAskList } from '../lib/database';

// watcher sagas
export function* watchSaveAsk() {
  try {
    yield takeEvery(Actions.ADD, callSaveAsk);
  } catch (error) {
    yield error;
  }
}
export function* watchDeleteAsk() {
  try {
    yield takeEvery(Actions.DELETE, callRemoveAsk);
  } catch (error) {
    yield error;
  }
}
export function* watchFetchData() {
  try {
    yield takeLatest(Actions.fetchData, callFetchData);
  } catch (error) {
    yield error;
  }
}
// worker sagas
export function* callFetchData(action) {
  try {
    const data = yield call(fetchAskList, action.uid);
    yield;
  } catch (error) {
    yield error;
  }
}
export function* callSaveAsk(action) {
  try {
    yield call(saveAskToDb, action.payload);
  } catch (error) {
    yield 'error';
  }
}
export function* callRemoveAsk(action) {
  try {
    yield call(removeAskFromDb, action.id);
  } catch (error) {
    yield error;
  }
}
export default function*() {
  yield [fork(watchSaveAsk), fork(watchDeleteAsk), fork(watchFetchData)];
}
