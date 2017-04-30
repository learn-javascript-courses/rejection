import React from 'react';
import { Field } from 'redux-form';
import FormComponent from './formComponent';

export default function Form(props) {
  console.log('props', props);
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={'Asked'}>Asked</label>
      <Field
        name={'asked'}
        type={'text'}
        component={FormComponent}
      />
      <label htmlFor={'Asked Who'}>Asked Who</label>
      <Field
        name={'person'}
        type={'text'}
        component={FormComponent}
      />
      <input type={'button'} value={'submit'} onClick={() => {
        handleSubmit();
        return reset('RejectionForm');
      }}/>
    </form>
  );
}
