import { all, put, call, take, takeEvery, fork } from 'redux-saga/effects';
import * as loginActions from './loginReducer';
import * as auth from '../lib/facebook';

// watcher
export function* watchFacebookLogin() {
  while (true) {
    yield take('START_LOGIN');
    yield fork(callFacebookLogin);
  }
}

// worker
export function* callFacebookLogin(action) {
  try {
    yield put(loginActions.isFetchingLogin());
    const { user } = yield call(auth.facebookSignIn);
    yield put(loginActions.loginSuccess(user.uid));
  } catch (error) {
    yield put(loginActions.loginFailed(error));
  }
}

export default function*() {
  yield [fork(watchFacebookLogin)];
}
