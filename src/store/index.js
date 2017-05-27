import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import points from '../points/points-reducer';
import list from '../list/list-reducer';
import history from '../history/history-reducer';
import rootSaga from '../sagas/root';
import configureFirebase from '../lib/firebase';

const rootReducer = combineReducers({
  list,
  points,
  history,
  form: formReducer
});

const sagas = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagas),
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
);

export default initialState => {
  const store = createStore(rootReducer, initialState, enhancer);
  configureFirebase();
  sagas.run(rootSaga);
  return store;
};
