import test from 'tape';
import cuid from 'cuid';
import { call } from 'redux-saga/effects';
import * as history from './history.saga';
import * as db from '../lib/database';

const createAskFactory = (
  { id = cuid(), time = Date.now(), person = 'Me', asked = 'Money', result = 'REJECTED' } = {}
) => ({
  id,
  time,
  person,
  asked,
  result
});

test('Should test the history saga', nest => {
  nest.test('Should test the createSaveAsk action creator', t => {
    const ask = createAskFactory();
    const actual = history.createSaveAskToHistory(ask);
    const expected = {
      type: 'SAVE_ASK_TO_HISTORY',
      ...ask
    };

    t.same(actual, expected, 'should create a createSaveAsk action object');
    t.end();
  });
  nest.test('Should test the callSaveAsk history Saga', t => {
    const action = history.createSaveAskToHistory();
    const gen = history.callSaveAskToHistory(action);
    const msg = 'should call the firebase api to save the ask into history';
    const actual = gen.next().value;
    const { id, asked, person, time, result } = action;
    const expected = call(db.saveAnsweredAsk, id, asked, person, time, result);

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Should test the error saving ask action creator', t => {
    const error = 'Error saving ask to firebase';
    const actual = history.createErrorSavingAskToHistory(error);
    const expected = {
      type: 'ERROR_SAVING_ASK',
      error
    };
    t.same(actual, expected, 'should create the error object');
    t.end();
  });
});
