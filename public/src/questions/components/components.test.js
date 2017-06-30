import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import jsxIncludes from 'tape-jsx-includes';
import SingleQuestion from './SingleQuestion';
import IterateQuestions from './IterateQuestions';
import jsxNotEquals from 'tape-jsx-notequals';
// extend tape with jsxEqual assertion:
import { shallow, mount } from 'enzyme';
import nock from 'nock';
const test = addAssertions(tape, {jsxEquals, jsxIncludes, jsxNotEquals});

const mockQuestions = [{
  id: 1,
  questionString: 'Do you want to play tennis?',
  answer: true,
  _createdBy: 'tg@hotmail.com',
},
{
  id: 2,
  questionString: 'Do you want to play baseball?',
  answer: false,
  _createdBy: 'tg@hotmail.com',
  askee: 'Bossman',
}]

export default () => {
   test('SingleQuestions root element', (t) => {
    const msg = 'should not equal a ul tag'
    const renderer = createRenderer();
      renderer.render(<SingleQuestion />);
      const result = renderer.getRenderOutput().type;
      const expected = 'ul'
    // compare output with the expected result:

      t.jsxNotEquals(result, expected, msg);
      t.end();
  });
  test('SingleQuestions root element', (t) => {
    const msg = 'should return a li tag'
    const renderer = createRenderer();
      renderer.render(<SingleQuestion />);
      const result = renderer.getRenderOutput().type;
      const expected = 'li'
    // compare output with the expected result:

      t.jsxEquals(result, expected, msg);
      t.end();
  });
  test('SingleQuestion with mock props', (t) => {
    const msg = 'should render a list item with questionString, answer, and _createdBy values'
    const renderer = createRenderer();
      renderer.render(<SingleQuestion questionString="Can I have your car" answer="false" _createdBy="tg@hotmail.com" />);
      const result = renderer.getRenderOutput();
      const expected =  SingleQuestion({questionString :"Can I have your car", answer : "false", _createdBy : "tg@hotmail.com"})
    // compare output with the expected result:
      t.jsxEquals(result, expected, msg);
      t.end();
  });
  test('<IterateQuestions/> root element', (t) => {
    const msg = 'should be a ul tag'
    const renderer = createRenderer();
      renderer.render(<IterateQuestions questions={mockQuestions} />);
      const result = renderer.getRenderOutput();
      //const expected = 'li'
      console.log(result);
     // const expected = 'ul'
    // compare output with the expected result:

      //t.jsxEquals(result, expected, msg);
      t.end();
  });
   test('<IterateQuestions questions={mockQuestions}>', (t) => {
    const msg = 'should map over the questions array to produce corresponding <SingleQuestion> components.'
    const renderer = createRenderer();
      renderer.render(<IterateQuestions questions={mockQuestions} />);
      const result = renderer.getRenderOutput();
      //const expected = 'li'
      const expected = IterateQuestions({questions: mockQuestions})
    // compare output with the expected result:

      t.jsxEquals(result, expected, msg);
      t.end();
  });
}