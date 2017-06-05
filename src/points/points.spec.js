import test from 'tape';
import React from 'react';
import ReactDom from 'react-dom/server';
import dom from 'cheerio';
import points from './points';

const render = ReactDom.renderToStaticMarkup;

test('Should test Points reducer', nest => {
  nest.test('Should have a points total', t => {
    const el = points({ clearScore: () => {}, points: 0 });
    const $ = dom.load(render(el));
    const actual = $('.points-points-total').html();
    const expected = 'Points 0';

    t.same(actual, expected, 'should have a points total');
    t.end();
  });
});
