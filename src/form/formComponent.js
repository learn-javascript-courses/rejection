import React from 'react';
import { Form, Message } from 'semantic-ui-react';

export default ({ input, meta: { touched, error }, ...custom }) => {
  const hasError = touched && error !== undefined;
  return (
    <Form.Input
      label={input.name.toUpperCase()}
      type="text"
      fluid
      {...input}
      {...custom}
      error={hasError}
    />
  );
};
