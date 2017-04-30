import React from 'react';
import { Field } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import FormComponent from './formComponent';

export default function(props) {
  const { handleSubmit, reset } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name={'asked'}
        type={'text'}
        component={FormComponent}
      />
      <Field
        name={'person'}
        type={'text'}
        component={FormComponent}
      />
      <Button.Group>
        <Button
          onClick={e => {
            e.preventDefault();
            return reset('RejectionForm');
        }}>Cancel</Button>
        <Button.Or />
        <Button
          positive
          type={'submit'}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            return reset('RejectionForm');
          }}
        >Submit</Button>
      </Button.Group>
    </Form>
  );
}
