import { describe, Try } from 'riteway';
import { addQuestion, reducer } from './questions';
import { getScore } from './get-score';
import { removeQuestion } from './questions';


const ACCEPTED = 1;
const REJECTED = 10;
const UNANSWERED = 0;

const question = {
  id: Math.random().toString(36).substr(2, 9),
  person: 'Jesse',
  question: 'Will you mow my yard for $10?',
  score: ACCEPTED,
  response: 'Accepted',
  timestamp: Date.now(),
};

const actions = [
  addQuestion({
    id: Math.random().toString(36).substr(2, 9),
    person: 'Jesse',
    question: 'Will you mow my yard for $10?',
    score: ACCEPTED,
    response: 'Accepted',
    timestamp: Date.now(),

  }),
  addQuestion({
    id: Math.random().toString(36).substr(2, 9),
    person: 'Jesse',
    question: 'Will you mow my yard for $10?',
    score: REJECTED,
    response: 'Rejected',
    timestamp: Date.now(),

  }),
  addQuestion({
    id: Math.random().toString(36).substr(2, 9),
    person: 'Jesse',
    question: 'Will you mow my yard for $10?',
    score: REJECTED,
    response: 'Rejected',
    timestamp: Date.now(),

  }),
  addQuestion(question),
  removeQuestion(question),
];

const createState = (state = []) => [].concat(state);


describe('getScore()', async (should) => {
  const { assert } = should('return the current score');

  const finalState = actions.reduce(reducer, []);

  assert({
    given: 'initial state',
    should: 'return score of 0',
    actual: getScore(createState()),
    expected: 0,
  });

  assert({
    given: 'state',
    should: 'return correct score',
    actual: getScore(finalState),
    expected: 21,
  });
});
