import React from 'react';
import { reduxForm } from 'redux-form';
import Form from './form';

const validate = ({ asked, person }) => {
  const errors = {};
  if (asked === undefined) errors.asked = 'Asked Field Required';
  if (person === undefined) errors.person = 'Person Field Required';
  return errors;
};

export default reduxForm({
  form: 'RejectionForm',
  validate
})(Form);
