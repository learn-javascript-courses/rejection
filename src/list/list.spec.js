import React from 'react';
import ReactDom from 'react-dom/server';
import dom from 'cheerio';
import test from 'tape';
import cuid from 'cuid';
import moment from 'moment';
import list from './list-items';
import listReducer from './list-reducer';
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
const createList = (asked = 'For Money', person = 'Mom') => [
  {
    asked,
    person
  }
];

test('Should test the list component', nest => {
  nest.test('Should Render Nothing for empty list array', t => {
    const el = list();
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
});
