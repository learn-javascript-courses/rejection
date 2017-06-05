import { take, fork, put, call } from 'redux-saga/effects';
import * as auth from '../lib/facebook';
import * as actions from './loginReducer';

// watchers
function* watchSignOut() {
  yield take('START_SIGNOUT');
  yield fork(callSignOut);
}
// workers
function* callSignOut(action) {
  try {
    yield put(actions.signOut());
    yield call(auth.facebookSignOut);
  } catch (error) {
    yield put(actions.signOutFailed(error));
  }
}

export default function*() {
  yield [fork(watchSignOut)];
}
