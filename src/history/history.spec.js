import React from 'react';
import ReactDom from 'react-dom/server';
import dom from 'cheerio';
import test from 'tape';
import cuid from 'cuid';
import moment from 'moment';
import history from './history';
import historyReducer, * as historyActions from './history-reducer';

export const ADD_HISTORY = 'ADD_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const DELETE_FROM_HISTORY = 'DELETE_FROM_HISTORY';
export const HISTORYACCEPTED = 'HISTORYACCEPTED';
export const HISTORYREJECTED = 'HISTORYREJECTED';

const render = ReactDom.renderToStaticMarkup;

const createAsk = (
  { asked = '', person = '', time = Date.now(), result = undefined, id = cuid() } = {}
) => ({
  asked,
  person,
  time,
  result,
  id
});
const createHistory = (
  { asked = 'Mom', time = Date.now(), person = 'Ryan', result = 'REJECTED', id = cuid() } = {}
) => ({
  asked,
  time,
  person,
  result,
  id
});

test('Should Test the History Component', nest => {
  nest.test('Should Render Nothing for empty history array', t => {
    const el = history();
    const $ = dom.load(render(el));
    const actual = $('.clear-history').html();
    const expected = null;

    t.equal(actual, expected, 'Should Not Render Anything');
    t.end();
  });
  nest.test('Should have a clear history button value', t => {
    const el = history({ history: [createHistory()] });
    const $ = dom.load(render(el));
    const output = $('.clear-history').html();

    const actual = output;
    const expected = 'Clear History';

    t.equal(actual, expected, 'Should have a clear button value');
    t.end();
  });
  nest.test('Should have a delete from history button value', t => {
    const el = history({ history: [createHistory()] });
    const $ = dom.load(render(el));
    const output = $('.delete-history').html();

    const actual = output;
    const expected = 'Delete From History';

    t.equal(actual, expected, 'Should have a delete button value');
    t.end();
  });
  nest.test('Should have a Date asked', t => {
    const savedHistory = createHistory();
    const el = history({ history: [savedHistory] });
    const $ = dom.load(render(el));
    const output = $('.history-date').html();

    const actual = output;
    const expected = `Date: ${moment(savedHistory.time).format('LLLL')}`;

    t.equal(actual, expected, 'Should have a time stamp');
    t.end();
  });
  nest.test('Should have an asked for field with a value', t => {
    const savedHistory = createHistory();
    const el = history({ history: [savedHistory] });
    const $ = dom.load(render(el));
    const output = $('.history-asked-for').html();

    const actual = output;
    const expected = `You Asked For : ${savedHistory.asked}`;

    t.same(actual, expected, 'Should have a value in the asked for');
    t.end();
  });
  nest.test('Should have a you asked for field with a value', t => {
    const savedHistory = createHistory();
    const el = history({ history: [savedHistory] });
    const $ = dom.load(render(el));
    const output = $('.history-asked').html();

    const actual = output;
    const expected = `You Asked : ${savedHistory.person}`;

    t.equal(actual, expected, 'Should have a value in the asked');
    t.end();
  });
  nest.test('Should Add to History', t => {
    const msg = 'Should add to history';
    const state = [];
    const action = historyActions.addToHistory(createAsk());
    const actual = historyReducer(state, action);
    const expected = [{ ...action.payload }];

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Should Delete specific ID from history', t => {
    const msg = 'Should remove a value from history based on ID';
    const expected = [];
    const ask = createAsk();
    const action = historyActions.deleteFromHistory(ask.id);
    const state = [ask];
    const actual = historyReducer(state, action);

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Should Clear History', t => {
    const state = [createAsk(), createAsk(), createAsk(), createAsk(), createAsk(), createAsk()];
    const msg = 'Should clear history';
    const action = historyActions.clearHistory();
    const actual = historyReducer(state, action);
    const expected = [];

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Should create a delete from history object', t => {
    const payload = cuid();
    const actual = {
      type: DELETE_FROM_HISTORY,
      payload
    };
    const expected = historyActions.deleteFromHistory(payload);

    t.same(actual, expected, 'Should create an object to dispatch delete from history with an id');
    t.end();
  });
  nest.test('Should create a clear history action', t => {
    const actual = {
      type: CLEAR_HISTORY
    };
    const expected = historyActions.clearHistory();

    t.same(actual, expected, 'should have just a clear history type');
    t.end();
  });
  nest.test('Should create an add to history object', t => {
    const payload = createHistory();
    const actual = {
      type: ADD_HISTORY,
      payload
    };
    const expected = historyActions.addToHistory(payload);

    t.same(actual, expected, 'should add to history');
    t.end();
  });
  nest.test('Should create a historyAccepted object', t => {
    const payload = createHistory().id;
    const actual = {
      payload,
      type: HISTORYACCEPTED
    };

    const expected = historyActions.historyAccepted(payload);
    t.same(actual, expected, 'should return a historyaccepted type with id');
    t.end();
  });
  nest.test('Should create a historyRejected object', t => {
    const payload = createHistory().id;
    const actual = {
      payload,
      type: HISTORYREJECTED
    };
    const expected = historyActions.historyRejected(payload);

    t.same(actual, expected, 'should return a histroyRejected type with id');
    t.end();
  });
  nest.test('Should test the historyaccepted case', t => {
    const payload = createHistory().id;
    const state = [payload];
    const action = historyActions.historyAccepted(payload.id);
    const expected = [{ ...payload, result: 'ACCEPTED' }];
    const actual = historyReducer(state, action);

    t.same(actual, expected, 'should add result to the history object');
    t.end();
  });
  nest.test('Should test the history rejected case', t => {
    const payload = createHistory().id;
    const state = [payload];
    const action = historyActions.historyRejected(payload.id);
    const expected = [{ ...payload, result: 'REJECTED' }];
    const actual = historyReducer(state, action);

    t.same(actual, expected, 'should add result to the history object');
    t.end();
  });
  nest.test('Should test the history selector', t => {
    const ask1 = createAsk();
    const ask2 = createAsk();
    const state = {
      history: [ask1, ask2],
      list: [],
      points: 0
    };
    const expected = [ask1, ask2];
    const actual = historyActions.getHistory(state);

    t.same(actual, expected, 'should return the correct slice of state');
    t.end();
  });
});
