import React from 'react';
import { shallow } from 'enzyme';
import { MainFormFormik } from './MainForm';

describe('MainFormFormik component', () => {
  const emptyFormValues = {
    question: '',
    askee: '',
    status: '',
    updating: {},
  };

  const updateFormValues = {
    updating: {
      isUpdating: true,
      id: '1234',
      question: 'Test Question',
      askee: 'Test Askee',
      status: 'rejected',
    },
  };

  describe('MainFormFormik Snapshots', () => {
    it('should match stored FormContainer - empty case', () => {
      expect(shallow(<MainFormFormik {...emptyFormValues} />)).toMatchSnapshot();
    });

    it('should match stored FormContainer - update case', () => {
      expect(shallow(<MainFormFormik {...updateFormValues} />)).toMatchSnapshot();
    });
  });
});
