import React from 'react';
import { shallow } from 'enzyme';
import History from './History';
import { sampleHistoryObj } from '../containers/App.spec';

const { history } = sampleHistoryObj;

const setup = (props) => {
  const component = shallow(<History {...props} />);

  return {
    component,
    question: component.find('h6'),
    askee: component.find('p'),
    status: component.find('span.badge'),
  };
};

describe('History component', () => {
  it('should render question title', () => {
    const { question } = setup(history[0]);
    expect(question.text()).toMatch(history[0].question);
  });

  it('should render askee', () => {
    const { askee } = setup(history[0]);
    expect(askee.text()).toMatch(history[0].askee);
  });

  it('should render 1', () => {
    const { status } = setup(history[2]);
    expect(status.text()).toMatch(/^1$/);
  });

  it('should render 10', () => {
    const { status } = setup(history[1]);
    expect(status.text()).toMatch(/^10$/);
  });
});
