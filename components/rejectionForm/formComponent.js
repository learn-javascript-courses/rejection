import React from 'react';
import { Form } from 'semantic-ui-react';

export default ({ input, meta: { touched, error }, ...custom }) => (
    <Form.Input
      label={input.name.toUpperCase()}
      type="text"
      fluid
      {...input} {...custom}
    />
);

