import { all } from 'redux-saga/effects';
import pointsSaga from '../points/points.saga';
import historySaga from '../history/history.saga';
import listSaga from '../list/list.saga';

export default function* rootSaga() {
  yield [pointsSaga(), historySaga(), listSaga()];
}
