import React from 'react';
import ReactDom from 'react-dom/server';
import dom from 'cheerio';
import test from 'tape';
import cuid from 'cuid';
import moment from 'moment';
import history from './history';
import historyReducer from './history-reducer';
import * as Actions from '../actions/index';

const render = ReactDom.renderToStaticMarkup;

const createAsk = (
  asked = '',
  person = '',
  time = Date.now(),
  result = undefined,
  id = cuid()
) => ({
  asked,
  person,
  time,
  result,
  id
});
const createHistory = (
  asked = 'Mom',
  time = Date.now(),
  person = 'Ryan',
  result = 'REJECTED',
  id = cuid()
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
  nest.test('Should have an asked for field with a value', t => {
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
    const action = Actions.addToHistory(createAsk());
    const actual = historyReducer(state, action);
    const expected = [{ ...action.payload }];

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Should Delete specific ID from history', t => {
    const msg = 'Should remove a value from history based on ID';
    const expected = [];
    const ask = createAsk();
    const action = Actions.deleteFromHistory(ask.id);
    const state = [ask];
    const actual = historyReducer(state, action);

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Should Clear History', t => {
    const state = [createAsk(), createAsk(), createAsk(), createAsk(), createAsk(), createAsk()];
    const msg = 'Should clear history';
    const action = Actions.clearHistory();
    const actual = historyReducer(state, action);
    const expected = [];

    t.same(actual, expected, msg);
    t.end();
  });
});
