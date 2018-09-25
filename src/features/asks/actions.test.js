import { describe } from 'riteway';

import { createAsk } from './actions';

describe('The createAsk action creator', async should => {
  const { assert } = should();

  {
    const id1 = createAsk().payload.id;
    const id2 = createAsk().payload.id;

    assert({
      given: 'two different calls',
      should: 'each produce actions with different ids',
      actual: id1 === id2,
      expected: false,
    });
  }
});
