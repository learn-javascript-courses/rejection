import React from 'react';
import ReactDom from 'react-dom/server';
import dom from 'cheerio';
import test from 'tape';
import cuid from 'cuid';
import moment from 'moment';
import list from './list-items';
import listReducer, * as Actions from './list-reducer';

const render = ReactDom.renderToStaticMarkup;

const createAsk = (asked = '', person = '', id = cuid()) => ({
  asked,
  person,
  id
});
const createList = (asked = 'For Money', person = 'Mom') => [
  {
    asked,
    person
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
  nest.test('Should add to the list', t => {
    const state = [];
    const ask = Actions.add();
    const expected = [ask.payload];
    const actual = listReducer(state, ask);
    const msg = 'Should add to the list';

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Should remove from the list', t => {
    const remove = createAsk();
    const dontRemove = createAsk();
    const state = [dontRemove, remove];
    const action = Actions.deleteAsk(remove.id);
    const actual = listReducer(state, action);
    const expected = [dontRemove];

    t.same(actual, expected, 'Should remove item');
    t.end();
  });
  nest.test('should create an add action object', t => {
    const action = createAsk();
    const expected = {
      type: 'ADD',
      payload: action
    };
    const actual = Actions.add(action);

    t.same(actual, expected, 'Should accept arguments');
    t.end();
  });
  nest.test('Should create an edit action object', t => {
    const { id } = createAsk();
    const expected = { type: 'EDIT', payload: id };
    const actual = Actions.edit(id);

    t.same(actual, expected, 'Should have a payload for edit');
    t.end();
  });
  nest.test('Should create a delete ask action object', t => {
    const payload = cuid();
    const expected = {
      type: 'DELETE',
      payload
    };
    const actual = Actions.deleteAsk(payload);

    t.same(actual, expected, 'Should create a delete object with an id as payload');
    t.end();
  });
  nest.test('Should test the list selector', t => {
    const ask1 = createAsk();
    const ask2 = createAsk();
    const state = {
      points: 0,
      history: [],
      list: [ask1, ask2]
    };
    const actual = Actions.getList(state);
    const expected = [ask1, ask2];

    t.same(actual, expected, 'should return the correct slice of state');
    t.end();
  });
});
