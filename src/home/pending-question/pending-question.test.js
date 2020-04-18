import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import PendingQuestion from './pending-question';

const createState = (questions = []) => questions;

describe('PendingQuestion', async (assert) => {
  {
    const questions = [
      {
        id: 0,
        timeStamp: 1586543957992,
        askee: 'Mike Pondsmith',
        question: 'I can has Cyberpunk original concept art',
        status: 'Pending',
      },
      {
        id: 1,
        timeStamp: 1586543957988,
        askee: 'KaylaMay',
        question: 'Custom print',
        status: 'Pending',
      },
    ];

    const $ = render(<PendingQuestion questions={createState(questions)} />);

    assert({
      given: 'questions in state',
      should: 'render a pending questions table',
      actual: $('.pending-questions').length,
      expected: 1,
    });

    assert({
      given: '2 questions in state',
      should: 'render 2 accepted buttons',
      actual: $('.accepted').length,
      expected: 2,
    });

    assert({
      given: '2 questions in state',
      should: 'render 2 rejected buttons',
      actual: $('.rejected').length,
      expected: 2,
    });

    assert({
      given: '2 questions in state',
      should: 'render two rows of question data',
      actual: $('.body-row').length,
      expected: 2,
    });

    assert({
      given: 'questions in state',
      should: 'render the table title',
      actual: $('.table-title').length,
      expected: 1,
    });

    assert({
      given: 'questions in state',
      should: 'render the table header data',
      actual: $('.pending-questions-header').length,
      expected: 1,
    });
  }

  {
    const questions = [
      {
        id: 1,
        timeStamp: 1586543957988,
        askee: 'KaylaMay',
        question: 'Custom print',
        status: 'Pending',
      },
    ];

    const $ = render(<PendingQuestion questions={createState(questions)} />);

    assert({
      given: 'a question in state',
      should: 'render the question id',
      actual: parseInt($('.question-id').html().trim(), 10),
      expected: 1,
    });

    assert({
      given: 'a question in state',
      should: 'render the askee data point',
      actual: $('.askee-data-pt').html().trim(),
      expected: 'KaylaMay',
    });

    assert({
      given: 'a question in state',
      should: 'render the question data point',
      actual: $('.question-data-pt').html().trim(),
      expected: 'Custom print',
    });

    assert({
      given: 'a question in state',
      should: 'render the question status data point',
      actual: $('.question-status').html().trim(),
      expected: 'Pending',
    });
  }
});
