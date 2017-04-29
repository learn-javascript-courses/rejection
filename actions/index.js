import { createAction } from 'redux-actions';
import * as Actions from '../constants/rejection';

export const add = createAction(Actions.ADD, ask => ask);
export const rejected = createAction(Actions.REJECTED);
export const accepted = createAction(Actions.ACCEPTED);
export const edit = createAction(Actions.EDIT);
export const deleteAsk = createAction(Actions.DELETE, id => id);
