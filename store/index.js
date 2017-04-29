import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';



export default initialState => {
  const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
};
