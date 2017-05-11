import { createAction } from 'redux-actions';
import * as Actions from '../constants';

export const add = createAction(Actions.ADD, values => values);
export const rejected = createAction(Actions.REJECTED);
export const accepted = createAction(Actions.ACCEPTED);
export const edit = createAction(Actions.EDIT);
export const deleteAsk = createAction(Actions.DELETE, id => id);
export const deleteFromHistory = createAction(Actions.DELETE_FROM_HISTORY, id => id);
export const clearHistory = createAction(Actions.CLEAR_HISTORY);
export const addToHistory = createAction(Actions.ADD_HISTORY, value => value);
export const clearScore = createAction(Actions.CLEAR_SCORE);
