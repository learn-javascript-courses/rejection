import React from 'react';
import { shallow } from 'enzyme';
import History from './History';
import { sampleHistoryObj } from '../containers/App.spec';

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
    const { question } = setup(sampleHistoryObj.data[0]);
    expect(question.text()).toMatch(sampleHistoryObj.data[0].question);
  });

  it('should render askee', () => {
    const { askee } = setup(sampleHistoryObj.data[0]);
    expect(askee.text()).toMatch(sampleHistoryObj.data[0].askee);
  });

  it('should render 1', () => {
    const { status } = setup(sampleHistoryObj.data[2]);
    expect(status.text()).toMatch(/^1$/);
  });

  it('should render 10', () => {
    const { status } = setup(sampleHistoryObj.data[1]);
    expect(status.text()).toMatch(/^10$/);
  });
});
