// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  // persistedState,
  // applyMiddleware(thunk),
  compose(
    applyMiddleware(thunk),
    /* ---- redux dev tools ----  */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
