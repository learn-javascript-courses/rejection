import test from 'tape';
import cuid from 'cuid';
import * as Actions from '../actions/index';
import pointsReducer from '../reducers/points';
import listReducer from '../reducers/list';
import historyReducer from '../reducers/history';

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

test('Should test Reducers', nest => {
  nest.test('Should test Points reducer', points => {
    points.test('Should increment state by 1 for accepted actions', t => {
      const state = 0;
      const expected = 1;
      const action = Actions.accepted();
      const actual = pointsReducer(state, action);
      const msg = 'Should increment state by 1';

      t.same(actual, expected, msg);
      t.end();
    });
    points.test('Rejected actions should increment state by 10', t => {
      const state = 5;
      const expected = 15;
      const action = Actions.rejected();
      const actual = pointsReducer(state, action);

      t.same(actual, expected, 'Should Be 6');
      t.end();
    });
    points.test('Should Clear the score', t => {
      const expected = 0;
      const state = 100;
      const action = Actions.clearScore();
      const actual = pointsReducer(state, action);
      const msg = 'Should clear the point total';

      t.same(actual, expected, 'Should return 0');
      t.end();
    });
  });
  nest.test('Should Test List Reducer', list => {
    list.test('Should add to the list', t => {
      const state = [];
      const ask = Actions.add();
      const expected = [ask.payload];
      const actual = listReducer(state, ask);
      const msg = 'Should add to the list';

      t.same(actual, expected, msg);
      t.end();
    });
    list.test('Should remove from the list', t => {
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
  nest.test('Should Test History Reducer', history => {
    history.test('Should Add to History', t => {
      const msg = 'Should add to history';
      const state = [];
      const action = Actions.addToHistory(createAsk());
      const actual = historyReducer(state, action);
      const expected = [{ ...action.payload }];

      t.same(actual, expected, msg);
      t.end();
    });
    history.test('Should Delete from History', t => {
      const msg = 'Should remove a value from history based on ID';
      const expected = [];
      const ask = createAsk();
      const action = Actions.deleteFromHistory(ask.id);
      const state = [ask];
      const actual = historyReducer(state, action);

      t.same(actual, expected, msg);
      t.end();
    });
    history.test('Should Clear History', t => {
      const state = [createAsk(), createAsk(), createAsk(), createAsk(), createAsk(), createAsk()];
      const msg = 'Should clear history';
      const action = Actions.clearHistory();
      const actual = historyReducer(state, action);
      const expected = [];

      t.same(actual, expected, msg);
      t.end();
    });
  });
});
