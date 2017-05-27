import test from 'tape';
import React from 'react';
import ReactDom from 'react-dom/server';
import dom from 'cheerio';
import points from './points';
import pointsReducer, * as Actions from './points-reducer';

const render = ReactDom.renderToStaticMarkup;

test('Should test Points reducer', nest => {
  nest.test('Should increment state by 1 for accepted actions', t => {
    const state = 0;
    const expected = 1;
    const action = Actions.accepted();
    const actual = pointsReducer(state, action);
    const msg = 'Should increment state by 1';

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Rejected actions should increment state by 10', t => {
    const state = 5;
    const expected = 15;
    const action = Actions.rejected();
    const actual = pointsReducer(state, action);

    t.same(actual, expected, 'Should Be 6');
    t.end();
  });
  nest.test('Should Clear the score', t => {
    const expected = 0;
    const state = 100;
    const action = Actions.clearScore();
    const actual = pointsReducer(state, action);
    const msg = 'Should clear the point total';

    t.same(actual, expected, 'Should return 0');
    t.end();
  });
  nest.test('Should have a Clear Score button', t => {
    const el = points({ clearScore: () => {}, points: 0 });
    const $ = dom.load(render(el));
    const actual = $('.points-clear-score').html();
    const expected = 'Clear Score';

    t.same(actual, expected, 'Should render a clear score button on the points component');
    t.end();
  });
  nest.test('Should have a points total', t => {
    const el = points({ clearScore: () => {}, points: 0 });
    const $ = dom.load(render(el));
    const actual = $('.points-points-total').html();
    const expected = 'Points 0';

    t.same(actual, expected, 'should have a points total');
    t.end();
  });
  nest.test('Should create a rejected action object', t => {
    const expected = { type: 'REJECTED' };
    const actual = Actions.rejected();

    t.same(actual, expected, 'Should have just a type of rejected');
    t.end();
  });
});
