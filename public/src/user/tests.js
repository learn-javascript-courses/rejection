import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import jsxIncludes from 'tape-jsx-includes';
import UserInfo from './UserInfo';
// extend tape with jsxEqual assertion:
const test = addAssertions(tape, {jsxEquals, jsxIncludes});

export default () => {
  test('UserInfos root element', (t) => {
    const msg = 'should return a div tag'
    const renderer = createRenderer();
      renderer.render(<UserInfo />);
      const result = renderer.getRenderOutput().type;
      const expected = 'div'
    // compare output with the expected result:

      t.jsxEquals(result, expected, msg);
      t.end();
  });
  test('UserInfo with mock props', (t) => {
    const msg = 'should render a list item with firstName, lastName, and email values'
    const renderer = createRenderer();
      renderer.render(<UserInfo firstName="Thomas Greco" lastName="Greco" email="tg@hotmail.com" score={0} />);
      const result = renderer.getRenderOutput();
      const expected =  UserInfo({firstName :"Thomas Greco", lastName : "Greco", email : "tg@hotmail.com", score: 0})
    // compare output with the expected result:
      t.jsxEquals(result, expected, msg);
      t.end();
  });
}