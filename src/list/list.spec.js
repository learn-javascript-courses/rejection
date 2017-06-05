import React from 'react';
import ReactDom from 'react-dom/server';
import dom from 'cheerio';
import test from 'tape';
import cuid from 'cuid';
import moment from 'moment';
import list from './list-items';
import listReducer, * as Actions from './list-reducer';

const render = ReactDom.renderToStaticMarkup;
export const HISTORYREJECTED = 'HISTORYREJECTED';
export const HISTORYACCEPTED = 'HISTORYACCEPTED';
export const ADD_HISTORY = 'ADD_HISTORY';

const createHistory = (
  { asked = 'Mom', person = 'Ryan', id = cuid(), result = 'REJECTED', uid = 1 } = {}
) => ({
  asked,
  person,
  result,
  id,
  uid
});

const createAsk = ({ asked = '', person = '', result = undefined, id = cuid(), uid = 1 } = {}) => ({
  asked,
  person,
  id,
  result,
  uid
});
const createList = (asked = 'For Money', person = 'Mom') => [
  {
    asked,
    person,
    result: undefined
  }
];

test('Should test the list component', nest => {
  nest.test('Should Render Nothing for empty list array', t => {
    const el = list(() => {}, []);
    const $ = dom.load(render(el));
    const actual = $('.list-items').html();
    const expected = '';

    t.equal(actual, expected, 'Should Not Render Anything');
    t.end();
  });
  nest.test('Should Render An Asked Field', t => {
    const createdList = createList();
    const el = list({ list: createdList, handleAnswer: () => {} });
    const $ = dom.load(render(el));
    const actual = $('.list-asked').html();
    const expected = 'For : For Money';

    t.equal(actual, expected, 'Should have a field for what you asked');
    t.end();
  });
  nest.test('Should Render A Person Field', t => {
    const createdList = createList();
    const el = list({ list: createdList, handleAnswer: () => {} });
    const $ = dom.load(render(el));
    const actual = $('.list-person').html();
    const expected = 'You Asked : MOM';

    t.equal(actual, expected, 'Should Mom for asked field');
    t.end();
  });
  nest.test('Should Render A Rejected Button', t => {
    const createdList = createList();
    const el = list({ list: createdList, handleAnswer: () => {} });
    const $ = dom.load(render(el));
    const actual = $('.list-rejected-button').html();
    const expected = 'Rejected';

    t.same(actual, expected, 'should render a rejected button');
    t.end();
  });
  nest.test('Should Render An Accepted Button', t => {
    const createdList = createList();
    const el = list({ list: createdList, handleAnswer: () => {} });
    const $ = dom.load(render(el));
    const actual = $('.list-accepted-button').html();
    const expected = 'Accepted';

    t.same(actual, expected, 'Should render an accepted button');
    t.end();
  });
});

test('Should unit test the action object and the reducer', nest => {
  nest.test('should create an add action object', t => {
    const createAskAction = createAsk();
    const expected = {
      type: 'ADD',
      payload: createAskAction
    };
    const actual = Actions.addAsk(createAskAction);

    t.same(actual, expected, 'should create an add Ask action object');
    t.end();
  });
  nest.test('Should add to the list', t => {
    const addAsk = createAsk();
    const state = {};
    state[addAsk.id] = addAsk;
    const expected = state;
    const action = Actions.addAsk(addAsk);
    const actual = listReducer(state, action);

    t.same(actual, expected, 'should add an ask to the list state');
    t.end();
  });
  nest.test('should create a removeAsk action object', t => {
    const ask = createAsk();
    const expected = {
      type: 'DELETE',
      id: ask.id,
      uid: undefined
    };
    const actual = Actions.deleteAsk(ask.id);
    t.same(actual, expected, 'should create  a delete action object');
    t.end();
  });
  nest.test('Should remove from the list', t => {
    const addAsk = createAsk();
    const state = {};
    state[addAsk.id] = addAsk;
    const expected = Object.assign({}, state);
    const action = Actions.deleteAsk(addAsk.id);
    const actual = listReducer(state, action);

    t.same(actual, expected, 'should remove an add with a specific id from the list');
    t.end();
  });
  nest.test('Should test the list selector', t => {
    const ask1 = createAsk();
    const ask2 = createAsk();
    const state = {
      points: 0,
      history: [],
      list: {
        [ask1.id]: ask1,
        [ask2.id]: ask2
      }
    };
    const actual = Actions.getList(state);
    const expected = {
      [ask1.id]: ask1,
      [ask2.id]: ask2
    };

    t.same(actual, expected, 'should return the correct slice of state');
    t.end();
  });
  nest.test('Should answer create an answered ask action object', t => {
    const id = cuid();
    const expected = {
      type: 'ANSWER_ASK',
      id,
      result: 'REJECTED',
      uid: undefined
    };
    const actual = Actions.answerAsk({ id, result: 'REJECTED' });

    t.same(actual, expected, 'should update the state');
    t.end();
  });
  nest.test('Should update the list state based on the id and the answer', t => {
    const ask1 = createAsk();
    const ask2 = createAsk();
    const state = {
      points: 0,
      history: {},
      list: {
        [ask1.id]: ask1,
        [ask2.id]: ask2
      }
    };
    const expected = {
      [ask1.id]: { ...ask1, result: 'REJECTED' },
      [ask2.id]: ask2
    };

    const action = Actions.answerAsk({ id: ask1.id, result: 'REJECTED' });
    const actual = listReducer(state.list, action);

    t.same(actual, expected, 'should test answer ask case');
    t.end();
  });
  nest.test('Should create fetching data action', t => {
    const uid = 1;
    const actual = Actions.fetchData(uid);
    const expected = {
      type: 'FETCH_DATA',
      uid
    };
    t.same(actual, expected, 'should be the same');
    t.end();
  });
  nest.test('should test the load asks action object', t => {
    const asks = createAsk();
    const actual = Actions.loadAsks(asks);
    const expected = { type: 'LOAD_DATA', asks };

    t.same(actual, expected, 'should create an action object with teh ask');
    t.end();
  });
  nest.test('Should test the error action creator', t => {
    const actual = Actions.createError('error');
    const expected = {
      type: 'ERROR',
      error: 'error'
    };

    t.same(actual, expected, 'should be deeply equal');
    t.end();
  });
});
