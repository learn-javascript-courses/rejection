import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import configureStore from './store';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();