import React from 'react';
import { Field } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import FormComponent from './formComponent';

export default function (props) {
  const { handleSubmit, reset, pristine, submitting, errors } = props;
  return (
    <Form success>
      <Field name={'asked'} type={'text'} component={FormComponent} />
      <Field name={'person'} type={'text'} component={FormComponent} />
      <Button.Group>
        <Button
          positive
          type={'submit'}
          disabled={(pristine && errors === undefined) || (submitting && errors === undefined)}
          onClick={e => {
            e.preventDefault();
            handleSubmit(e);
            return reset('RejectionForm');
          }}
        >
          Submit
        </Button>
        <Button.Or />
        <Button
          onClick={e => {
            e.preventDefault();
            return reset('RejectionForm');
          }}
        >
          Cancel
        </Button>

      </Button.Group>
    </Form>
  );
}
