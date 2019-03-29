import React from 'react';
import describe from 'riteway';
import render from 'riteway/render-component';

import Question from './question-component';
import reducer, { createQuestion } from '../rejection-reducer';

describe('Question', async assert => {
  {

    const $ = render(<Question />);
    assert({
      given: 'no props',
      should: 'render the question container',
      actual: $('li.question').length,
      expected: 1,
    });

  }

  {

    const questionOne = {
      question: 'May I have another?',
      askee: 'Vendor',
      status: 'Accepted'
    };
    const question = [questionOne].map(question => createQuestion(question)).reduce(reducer, reducer())
    const $ = render(<Question {...question[0]} />);

    assert({
      given: 'a question',
      should: 'render the question text',
      actual: $('dd.question').text(),
      expected: question[0].question
    });

    assert({
      given: 'a question',
      should: 'render the askee field',
      actual: $('dd.askee').text(),
      expected: question[0].askee
    });

    assert({
      given: 'a question',
      should: 'render the status field',
      actual: $('dd.status').text(),
      expected: question[0].status
    });

    assert({
      given: 'a question',
      should: 'render the timestamp field',
      actual: $('dd.timestamp').text(),
      expected: (new Date(question[0].timestamp)).toLocaleString()
    });

  }


});
