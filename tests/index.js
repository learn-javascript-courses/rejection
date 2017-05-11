import test from 'tape';
import * as Actions from '../actions/index';
import pointsReducer from '../reducers/points';
import listReducer from '../reducers/list';
import historyReducer from '../reducers/history';

test('Should test Reducers reducer', nest => {
  nest.test('Should test points reducers', points => {
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
      const expected = [
        {
          asked: 'test',
          person: 'tester',
          answer: 'rejected',
          filter: 'none',
          id: 0
        }
      ];

      const action = Actions.add({
        asked: 'test',
        person: 'tester',
        answer: 'rejected'
      });
      const actual = listReducer(state, action);

      const msg = 'Should add to the list';

      t.same(actual, expected, msg);
      t.end();
    });
    list.test('Should remove from the list', t => {
      const state = [
        {
          asked: 'test',
          person: 'tester',
          answer: 'rejected',
          filter: 'none',
          id: 1
        },
        {
          asked: 'test',
          person: 'tester',
          answer: 'rejected',
          filter: 'none',
          id: 0
        }
      ];
      const action = Actions.deleteAsk(0);
      const actual = listReducer(state, action);
      const expected = [
        {
          asked: 'test',
          person: 'tester',
          answer: 'rejected',
          filter: 'none',
          id: 0
        }
      ];

      t.same(actual, expected, 'Should remove item');
      t.end();
    });
  });
  nest.test('Should Test the History Reducer', history => {
    history.test('Should Add to History', t => {
      const msg = 'Should add to history';
      const state = [];
      const action = Actions.addToHistory({
        asked: 'what did you ask',
        person: 'person',
        time: 'a time',
        result: Actions.accepted().type,
        id: 0
      });
      const actual = historyReducer(state, action);
      const expected = [
        {
          asked: 'what did you ask',
          person: 'person',
          time: 'a time',
          result: Actions.accepted().type,
          id: state.reduce((maxId, curr) => Math.max(maxId, curr.id), -1) + 1
        }
      ];

      t.same(actual, expected, msg);
      t.end();
    });
    history.test('Should Delete from History', t => {
      const msg = 'Should remove a value from history based on ID';
      const expected = [];
      const action = Actions.deleteFromHistory(0);
      const state = [
        {
          asked: 'what did you ask',
          person: 'person',
          time: 'a time',
          result: Actions.accepted().type,
          id: 0
        }
      ];
      const actual = historyReducer(state, action);

      t.same(actual, expected, msg);
      t.end();
    });
    history.test('Should Clear History', t => {
      const state = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
      const msg = 'Should clear history';
      const action = Actions.clearHistory();
      const actual = historyReducer(state, action);

      const expected = [];
      t.same(actual, expected, msg);
      t.end();
    });
  });
});
