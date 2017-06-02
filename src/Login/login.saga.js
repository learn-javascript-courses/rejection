import { put, call, takeEvery, fork } from 'redux-saga/effects';
import * as loginActions from './loginReducer';
import * as auth from '../lib/facebook';
// watcher
export function* watchFacebookLogin() {
  try {
    yield takeEvery(loginActions.isFetchingLogin, callFacebookLogin);
  } catch (error) {
    yield error;
  }
}

// worker
export function* callFacebookLogin(action) {
  try {
    yield call(auth.facebookSignIn);
    // const val = yield put(loginActions.loginSuccess(uid));
    // console.log(val);
  } catch (error) {
    yield put(loginActions.loginFailed(error));
  }
}

export default function*() {
  yield [fork(watchFacebookLogin)];
}
