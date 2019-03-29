import React from 'react';
import describe from 'riteway';
import render from 'riteway/render-component';

import Score from './score-component';

describe('Score', async assert => {
  {

    const score = 31;
    const $ = render(<Score score={score} />);

    assert({
      given: 'a score',
      should: 'render the score',
      actual: parseInt($('.score span').text()),
      expected: score
    });
  }

  {

    const score = 20;
    const $ = render(<Score score={score} />);

    assert({
      given: 'a score',
      should: 'render the score',
      actual: parseInt($('.score span').text()),
      expected: score
    });
  }

});
