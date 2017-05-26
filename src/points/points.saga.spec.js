import test from 'tape';
import cuid from 'cuid';
import { put, call } from 'redux-saga/effects';
import * as saga from './points.saga';
import * as db from '../lib/database';

test('Should test points saga', nest => {
  nest.test('Should create a fetch points saga', t => {
    const uid = cuid();
    const expected = {
      type: 'FETCH_POINTS',
      uid
    };
    const actual = saga.createFetchPoints(uid);

    t.same(actual, expected, 'should create a save points action object');
    t.end();
  });
  nest.test('Should create a save points saga', t => {
    const uid = cuid();
    const expected = {
      type: 'SAVE_POINTS',
      uid,
      points: 0
    };
    const actual = saga.createSavePoints({ uid, points: 0 });

    t.same(actual, expected, 'should create a save points action object');
    t.end();
  });
  nest.test('Should create a error fetching points action object', t => {
    const error = 'there was an error fetching the points from firebase';
    const actual = saga.reportFetchPointsError(error);
    const expected = {
      type: 'ERROR_FETCHING_POINTS',
      error
    };

    t.same(actual, expected, 'should create an error fetching points object');
    t.end();
  });
  nest.test('Should test the callSavePoints saga', t => {
    const expected = call(db.savePoints, 1, 0);
    const gen = saga.callSavePoints({ id: 1, points: 0 });
    const actual = gen.next().value;

    t.same(actual, expected, 'should save points to db');
    t.end();
  });
  nest.test('Should test callFetchPoints saga', t => {
    const uid = cuid();
    const expected = call(db.fetchPoints, uid);
    const gen = saga.callFetchPoints({ uid });
    const actual = gen.next().value;

    t.same(actual, expected, 'Should fetch points from the db');
    t.end();
  });
});
