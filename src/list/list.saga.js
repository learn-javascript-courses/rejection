import { all, take, takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as Actions from './list-reducer';
import { updateAskWithDeleted, removeAskFromDb, saveAskToDb, fetchAskList } from '../lib/database';

// watcher sagas
export function* watchDeleteHistory() {
  try {
    yield takeEvery(Actions.DELETE, callDeleteHistory);
  } catch (error) {
    yield error;
  }
}
export function* watchSaveAsk() {
  try {
    yield takeEvery(Actions.ADD, callSaveAsk);
  } catch (error) {
    yield error;
  }
}
export function* watchFetchData() {
  try {
    yield takeEvery(Actions.FETCH_DATA, callFetchData);
  } catch (error) {
    yield error;
  }
}
export function* watchErrorOccured() {
  yield takeEvery(Actions.ERROR, callErrorOccured);
}

// worker sagas
export function* callDeleteHistory(action) {
  try {
    yield call(updateAskWithDeleted, action);
  } catch (error) {
    yield put(Actions.error(error));
  }
}
export function* callErrorOccured({ error }) {
  try {
    yield call(Actions.error, error);
  } catch (error) {
    yield 'an error occured';
  }
}
export function* callFetchData(action) {
  try {
    const data = yield call(fetchAskList, action.uid);
    const asks = yield Object.values(data.val() || {});
    yield put(Actions.loadAsks(asks));
  } catch (error) {
    yield put(Actions.error(error));
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
  yield [fork(watchDeleteHistory), fork(watchSaveAsk), fork(watchFetchData)];
}
