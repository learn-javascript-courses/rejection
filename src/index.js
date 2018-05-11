import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { reducer as Questions } from './reducers/questions';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = createStore(Questions);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
