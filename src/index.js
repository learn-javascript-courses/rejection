import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      history: store.getState().history,
    });
  }, 1000),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
