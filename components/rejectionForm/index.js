import React from 'react';
import { reduxForm , reset} from 'redux-form';
import Form from './form';


export default reduxForm({
  form: 'RejectionForm'
})(Form);
