import React from 'react';
import { Button, Card, Segment, Container } from 'semantic-ui-react';
import * as Actions from '../actions';

export default function List({ list, handleAnswer }) {
  return list.length > 0 ? (
    <Container>
      <Segment padded>
        {list.map((ask, index) => (
          <Card raised centered key={ask.person + ask.asked + Date.now()}>
            <Card.Content>
              <Card.Header>You Asked : {ask.asked.toUpperCase()}</Card.Header>
              <Card.Meta />
              <Card.Description>For : {ask.person}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button
                basic
                color={'red'}
                fluid
                onClick={e => handleAnswer(e, { value: ask, answer: Actions.rejected, index })}
              >Rejected
              </Button>
              <Button
                basic
                color={'green'}
                fluid
                onClick={e => handleAnswer(e, { value: ask, answer: Actions.accepted, index })}
              >Accepted</Button>
            </Card.Content>
          </Card>
        ))}
      </Segment>
    </Container>
  ) : <div />;
}
