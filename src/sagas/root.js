import { all } from 'redux-saga/effects';
import listSaga from '../list/list.saga';
import loginSaga from '../Login/login.saga';

export default function* rootSaga() {
  yield all([listSaga(), loginSaga()]);
}
