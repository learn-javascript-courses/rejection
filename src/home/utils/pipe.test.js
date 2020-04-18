import { describe } from 'riteway';
import pipe from './pipe';

describe('pipe', async (assert) => {
  const inc = (n) => n + 1;
  const double = (n) => n * 2;
  const compute = pipe(inc, double);

  assert({
    given: 'functions as parameters',
    should: 'perform the expected calculation correctly',
    actual: compute(10),
    expected: 22,
  });
});
