import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import points from '../points/points-reducer';
import list from '../list/list-reducer';
import history from '../history/history-reducer';

const rootReducer = combineReducers({
  list,
  points,
  history,
  form: formReducer
});
const middleware = [];
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    {
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }
    )
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

export default initialState => createStore(rootReducer, initialState, enhancer);
