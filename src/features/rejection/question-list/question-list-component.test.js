import React from 'react';
import describe from 'riteway';
import render from 'riteway/render-component';

import QuestionList from './question-list-component';
import reducer, { createQuestion } from '../rejection-reducer';

describe('QuestionList', async assert => {
  {
    const $ = render(<QuestionList questions={[]} />);
  
    assert({
      given: 'no props',
      should: 'render the container element',
      actual: $('.question-list').length,
      expected: 1
    });

  }

  {

    const questionOne = {
      question: 'Is my submission accepted?',
      askee: 'Controller',
      status: 'Rejected'
    };
    const questionTwo = {
      question: 'May I accept more clients?',
      askee: 'Board',
      status: 'Unanswered'
    };
    const questionList = [questionOne, questionTwo].map(question => createQuestion(question)).reduce(reducer, reducer());
    const $ = render(<QuestionList questions={questionList} />);

    assert({
      given: 'a list of questions',
      should: 'render a list of questions',
      actual: $('.question-list').children('li.question').length,
      expected: 2
    });

  }

});
