import { describe } from 'riteway';

describe('component under test', async should => {
  const { assert } = should();

  assert({
    given: 'some input',
    should: 'some output',
    actual: true,
    expected: true,
  });
});
