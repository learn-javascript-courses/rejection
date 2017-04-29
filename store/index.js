import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default initialState => {
  const store = createStore(rootReducer, initialState )
};
