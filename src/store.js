import { createStore } from 'redux';
import { reducer as Questions } from './reducers/questions';

export const store = createStore(Questions);
