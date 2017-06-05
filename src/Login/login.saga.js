import { all, put, call, take, takeEvery, fork } from 'redux-saga/effects';
import * as loginActions from './loginReducer';
import * as auth from '../lib/facebook';
import * as profileActions from '../profile/profile-reducer';

// watcher
export function* watchFacebookLogin() {
  yield take('START_LOGIN');
  yield fork(callFacebookLogin);
}
// worker
export function* callFacebookLogin(action) {
  try {
    yield put(loginActions.isFetchingLogin());
    const { user } = yield call(auth.facebookSignIn);
    yield put(loginActions.loginSuccess(user.uid));
    yield put(profileActions.saveProfile(user.providerData[0]));
    yield put(loginActions.fetchData(user.uid));
  } catch (error) {
    yield put(loginActions.loginFailed(error));
  }
}

export default function*() {
  yield [fork(watchFacebookLogin)];
}
