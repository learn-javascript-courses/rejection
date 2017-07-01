import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import questionsReducer from './questions/state/reducer';
import userReducer from './user/reducer';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = applyMiddleware(promise, thunk, logger);
const mainReducer = combineReducers({
  userState: userReducer,
  questionsAppState: questionsReducer,
  form: formReducer,
});


const configureStore = () => {
  const store = createStore(mainReducer, composeEnhancers(enhancers))

  return store;

}

export default configureStore;
