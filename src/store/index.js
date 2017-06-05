import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import list from '../list/list-reducer';
import rootSaga from '../sagas/root';
import configureFirebase from '../lib/firebase';
import login from '../Login/loginReducer';
import user from '../profile/profile-reducer';

const rootReducer = combineReducers({
  login,
  list,
  user,
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
  sagas.run(rootSaga);
  configureFirebase();
  return store;
};
