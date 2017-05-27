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
  nest.test('Should test the clear history from db action creator', t => {
    const uid = 1;
    const actual = history.createClearHistoryFromDb(uid);
    const expected = {
      type: 'CLEAR_HISTORY_FROM_DB',
      uid
    };

    t.same(actual, expected, 'should return just a clear history obj with type');
    t.end();
  });
  nest.test('Should test the callClearHistory saga worker', t => {
    const uid = 1;
    const gen = history.callClearHistoryFromDb({ uid });
    const actual = gen.next().value;
    const expected = call(db.clearHistoryFromDb, uid);

    t.same(actual, expected, 'should call the db to clear history');
    t.end();
  });
  nest.test('Should test the createDeleteSpecificItemFromHistory', t => {
    const expected = {
      type: 'DELETE_SPECIFIC_ITEM_FROM_HISTORY',
      id: 1,
      uid: 1
    };
    const actual = history.createDeleteSpecificItemFromHistory(1);

    t.same(actual, expected, 'should create an action object with an id to delete');
    t.end();
  });
  nest.test('Should test the callDeleteSpecificItemFromHistory', t => {
    const gen = history.callDeleteSpecificItemFromHistory({ id: 1, uid: 1 });
    const actual = gen.next().value;
    const expected = call(db.deleteSpecificHistoryItem, 1, 1);

    t.same(actual, expected, 'should call the db to clear history');
    t.end();
  });
});
