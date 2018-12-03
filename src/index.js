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
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  devTools = a => a;
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    /* ---- redux dev tools ----  */
    devTools,
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
