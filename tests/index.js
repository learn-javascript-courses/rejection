const test = require('tape');
const list = require('../reducers/list');
const points = require('../reducers/points');


test('Should test points reducer', nest => {
  nest.test('return default state', t => {
    const state = 0;
    const expected = 1;
    const actual = points['ACCEPTED'](state, 0)

    t.same(actual, expected, 'Should Be 1');
    t.end();
  });
  nest.test('return default state', t => {
    const state = 0;
    const expected = 10;
    const actual = points['REJECTED'](state, 0)

    t.same(actual, expected, 'Should Be 10');
    t.end();
  });
});
