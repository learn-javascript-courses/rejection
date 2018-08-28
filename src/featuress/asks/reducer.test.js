import { describe } from 'riteway'
import { map, pickAll } from 'ramda'

import { acceptAsk, addAsk, rejectAsk, updateAsk } from './actions'
import { defaultState, questionsReducer as reducer } from './reducer'

const expectedProps = map(pickAll(['askee', 'question', 'status']))

describe('questionsReducer()', async should => {
  const { assert } = should()

  assert({
    given: 'no state or action',
    should: 'return the default state',
    actual: reducer(),
    expected: defaultState,
  })

  assert({
    given: 'current state and an unknown action type for this reducer',
    should: 'return the current state',
    actual: reducer({ some: 'state' }, { type: '__unknown__' }),
    expected: { some: 'state' },
  })

  {
    const expected = [
      { askee: 'Boss', question: 'Can I have a raise?', status: 'Unanswered' },
    ]
    const action = addAsk({ question: 'Can I have a raise?', askee: 'Boss' })

    const nextState = reducer(undefined, action)
    const actual = expectedProps(nextState)

    assert({
      given: `a state with zero asks and a ${addAsk().type} action`,
      should: 'return a new state containing the ask',
      actual,
      expected,
    })
  }
})
