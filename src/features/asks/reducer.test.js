import { describe } from 'riteway';

import { asksReducer as reducer, defaultState } from './reducers';
import { createAsk } from './actions';

describe('src/features/asks/reducer', async should => {
  const { assert } = should();

  assert({
    given: 'no state',
    should: 'return the default state',
    actual: reducer(),
    expected: defaultState,
  });

  assert({
    given: 'an unrecognized action',
    should: 'return the passed in state',
    actual: reducer({ foo: 1 }, { type: '__UNKNOWN__' }),
    expected: { foo: 1 },
  });

  {
    const uid = 'could_be_anything';
    const action = createAsk({ question: 'Can I have a raise?', askee: 'Boss' });
    action.payload.id = uid;
    const expected = {
      byId: {
        [uid]: { id: uid, question: 'Can I have a raise?', askee: 'Boss' },
      },
    };

    assert({
      given: 'an action to create an ask',
      should: 'return the state with the ask added',
      actual: reducer(defaultState, action),
      expected,
    });
  }
});
