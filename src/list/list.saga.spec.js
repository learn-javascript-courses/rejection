import cuid from 'cuid';
import test from 'tape';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as saga from './list.saga';
import * as db from '../lib/database';
import * as actions from './list-reducer';

const createAsk = ({ id = cuid(), person = 'Me', asked = 'I am asking for something' } = {}) => ({
  id,
  person,
  asked,
  result: undefined
});
const createHistory = (
  { id = cuid(), person = 'Me', asked = 'I am asking for something', result = 'REJECTED' } = {}
) => ({
  id,
  person,
  asked,
  result
});
test('Should test the list sagas', nest => {
  nest.test('Should test the ADD saga', t => {
    const action = actions.addAsk();
    const expected = call(db.saveAskToDb, action.payload);
    const gen = saga.callSaveAsk(action);
    const actual = gen.next().value;

    t.same(actual, expected, 'should be deeply equal');
    t.end();
  });
  nest.test('Should test the DELETE saga', t => {
    const ask = createAsk();
    const action = actions.deleteAsk(ask.id);
    const expected = call(db.removeAskFromDb, action.id);
    const gen = saga.callRemoveAsk(action);
    const actual = gen.next().value;

    t.same(actual, expected, 'should call the effect');
    t.end();
  });
  nest.test('Should test the callFetchData saga', t => {
    const action = actions.fetchData(1);
    const expected = call(db.fetchAskList, 1);
    const gen = saga.callFetchData(action);
    const actual = gen.next().value;

    t.same(actual, expected);

    t.end();
  });
});
