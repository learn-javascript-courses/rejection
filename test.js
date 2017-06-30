import test from 'tape';
import questionsTest from './src/questions/state/reducer.test.js';
import userTest from './src/user/reducer.test';
test('Component aspect being tested', assert => {
  const msg = `should perform something.`

  const actual = 'lets';
  const expected = 'lets';
  assert.same(actual, expected, msg);
  assert.end();
});
questionsTest();
userTest();
// testStore()
//themeTest()
