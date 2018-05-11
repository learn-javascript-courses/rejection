import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import App from './App';
import { reducer as Questions } from './reducers/questions';
import { loadState, saveState } from './reducers/local-state';
// import registerServiceWorker from './registerServiceWorker';

import './index.css';

const persistedState = loadState();
const store = createStore(
  Questions,
  persistedState,
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
