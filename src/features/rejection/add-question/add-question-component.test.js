import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import AddQuestion from './add-question-component';

/*
5 Questions -- Every unit test is a good bug report!
1. What component is being tested?
2. What behavior is being tested?
3. What is the actual output?
4. What is the expected output?
5. How can the failure be reproduced?
*/

describe('AddQuestion component', async assert => {
  const $ = render(<AddQuestion />);

  assert({
    given: 'no props',
    should: 'render the question input field',
    actual: $('.question').length,
    expected: 1
  });

  assert({
    given: 'no props',
    should: 'render the askee input field',
    actual: $('.askee').length,
    expected: 1
  });

  assert({
    given: 'no props',
    should: 'render the accepted button',
    actual: $('.accepted').length,
    expected: 1
  });

  assert({
    given: 'no props',
    should: 'render the rejected button',
    actual: $('.rejected').length,
    expected: 1
  });

  assert({
    given: 'no props',
    should: 'render the Unanswered button',
    actual: $('.unanswered').length,
    expected: 1
  });

});

