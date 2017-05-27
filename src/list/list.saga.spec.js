import cuid from 'cuid';
import test from 'tape';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as listSaga from './list.saga';
import * as db from '../lib/database';

const createAsk = ({ id = cuid(), person = 'Me', ask = 'I am asking for something' } = {}) => ({
  id,
  person,
  ask
});
test('Should test the list sagas', nest => {
  nest.test('Should test the createSaveAsk action object', t => {
    const ask = createAsk();
    const expected = {
      type: 'CREATE_SAVE_ASK',
      ...ask
    };
    const actual = listSaga.createSaveAsk(ask);
    t.same(actual, expected, 'should create the createSaveAsk action object');
    t.end();
  });
  nest.test('Should create the createFetchAsk action object', t => {
    const uid = cuid();
    const expected = {
      type: 'CREATE_FETCH_ASK',
      uid
    };
    const actual = listSaga.createFetchAsk(uid);

    t.same(actual, expected, 'should create an action object with the uid');
    t.end();
  });
  nest.test('Should create the errorFetchingAsk action object', t => {
    const error = 'There was an error that occured retriving your data from the db!';
    const expected = {
      type: 'ERROR_FETCHING_ASK',
      error
    };
    const actual = listSaga.createErrorFetchingAsk(error);

    t.same(actual, expected, 'should return an error action object');
    t.end();
  });
  nest.test('Should test the callFetchAsk saga', t => {
    const uid = cuid();
    const expected = call(db.fetchAskList, uid);
    const gen = listSaga.callFetchAsk({ uid });
    const actual = gen.next().value;

    t.same(actual, expected, 'should call the fetch ask route');
    t.end();
  });
  nest.test('Should create the createDeleteAskFromFirebaseList action creator', t => {
    const id = cuid();
    const expected = { type: 'DELETE_ASK_FROM_FIREBASE_LIST', id };
    const actual = listSaga.createDeleteAskFromFirebaseList(id);

    t.same(actual, expected, 'should create an object with an id as payload');
    t.end();
  });
  nest.test('Should test the worker for deleteing AskFromFirebaseList', t => {
    const id = cuid();
    const expected = call(db.removeAskFromList, id);
    const gen = listSaga.callDeleteAskFromFirebaseList({ id });
    const actual = gen.next().value;

    t.same(actual, expected, 'should call the fetch ask route');
    t.end();
  });
  nest.test('Should test the callSaveAsk worker', t => {
    const { id, ask, person } = createAsk();
    const expected = call(db.saveAskToDb, id, ask, person);
    const gen = listSaga.callSaveAskToDb({ id, ask, person });
    const actual = gen.next().value;

    t.same(actual, expected, 'should test the call saveAskToDB Worker');
    t.end();
  });
});
