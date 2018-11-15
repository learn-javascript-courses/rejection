import React from 'react';
import { shallow } from 'enzyme';
import { App, Heading, HistoryContainer } from './App';

export const sampleHistoryObj = {
  history: [
    {
      askee: 'Elon Musk',
      id: '36883675-8948-4cec-a163-08bb4aa3c239',
      question: 'Can I fly to mars?',
      status: 'rejected',
      timestamp: '2018-11-13T12:43:50.649Z',
    },
    {
      askee: 'Wife',
      id: '38e0cec0-483a-4bee-9398-2f2e4e6efd43',
      question: 'Can we get a lambo?',
      status: 'rejected',
      timestamp: '2018-11-13T03:55:27.959Z',
    },
    {
      askee: 'Stranger',
      id: '0473ae95-54a6-4dbb-a8a2-dda0b032104b',
      question: 'Can I have a penny?',
      status: 'accepted',
      timestamp: '2018-11-13T03:58:27.779Z',
    },
  ],
};

describe('App component', () => {
  const component = shallow(<HistoryContainer {...sampleHistoryObj} />);

  it('should render history count', () => {
    expect(component.find('span.badge').text()).toMatch(/^3$/);
  });
});

describe('App component heading (count)', () => {
  const component = shallow(<Heading {...sampleHistoryObj} />);

  it('should render the score of 21', () => {
    expect(component.find('p.h3').text()).toMatch(/^.*?Score:21.*?$/);
  });
});

export default sampleHistoryObj;
