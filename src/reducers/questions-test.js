import { describe, Try } from 'riteway';
import { addQuestion, removeQuestion, reducer } from './questions';

const ACCEPTED = 1;
const REJECTED = 10;
const UNANSWERED = 0;
const ADD_QUESTION = 'reducers/addQuestion';
const REMOVE_QUESTION = 'reducers/removeQuestion';

const createState = (state = []) => [].concat(state);

const question = {
  id: Math.random().toString(36).substr(2, 9),
  person: 'Jesse',
  question: 'Will you mow my yard for $10?',
  score: ACCEPTED,
  response: 'Accepted',
  timestamp: Date.now(),
};

const initialState = createState(question);

describe('addQuestion()', async (should) => {
  const { assert } = should('return an Action Object');

  assert({
    given: 'no arguments',
    should: 'return Action Object',
    actual: addQuestion().hasOwnProperty('type'),
    expected: true,
  });

  assert({
    given: 'a question object',
    should: 'return ADD_QUESTION Action Object with question as payload',
    actual: addQuestion(question),
    expected: {
      type: ADD_QUESTION,
      payload: question,
    },
  });
});

describe('removeQuestion()', async (should) => {
  const { assert } = should('return an Action Object');

  assert({
    given: 'no arguments',
    should: 'return Action Object',
    actual: removeQuestion().hasOwnProperty('type'),
    expected: true,
  });

  assert({
    given: 'a question object',
    should: 'return REMOVE_QUESTION Action Object with id as payload',
    actual: removeQuestion(question),
    expected: {
      type: REMOVE_QUESTION,
      payload: question.id,
    },
  });
});

describe('reducer()', async (should) => {
  const { assert } = should('return a default state');

  assert({
    given: 'no arguments',
    should: 'return a default state',
    actual: reducer(),
    expected: createState(),
  });

  assert({
    given: 'no state and an add question action',
    should: 'return a new state with the question',
    actual: reducer(undefined, addQuestion(question)),
    expected: createState(question),
  });

  assert({
    given: 'no arguments',
    should: 'return a default state',
    actual: reducer(),
    expected: createState(),
  });

  assert({
    given: 'no state and remove question action',
    should: 'return the default state',
    actual: reducer(undefined, removeQuestion(question)),
    expected: createState(),
  });

  assert({
    given: 'state and a remove question action',
    should: 'return the new state with the question removed',
    actual: reducer(initialState, removeQuestion(question)),
    expected: createState(),
  });
});
