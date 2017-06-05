import React from 'react';
import { Form, Container, Button, Message } from 'semantic-ui-react';

export default props =>
  <Container textAlign={'center'}>
    <Form>
      <Message>
        {'We Accept Logins from the following Services, Please click One to Login'}
      </Message>
      <br /><br />
      <Button className="ui facebook button" onClick={props.startLogin}>
        <i className="facebook icon" />
        Facebook
      </Button>
    </Form>
  </Container>;
