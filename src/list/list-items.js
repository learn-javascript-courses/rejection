import React from 'react';
import { Button, Card, Segment, Container } from 'semantic-ui-react';
import * as Actions from '../actions';

export default ({ list = [], handleAnswer = () => {} } = {}) => (
  <div className="list-items">
    {list.length === 0
      ? null
      : list.map((ask, index) => (
        <Card raised centered key={ask.id}>
          <Card.Content>
            <Card.Header className="list-person">
                You Asked : {ask.person.toUpperCase()}
            </Card.Header>
            <Card.Meta />
            <Card.Description className="list-asked">For : {ask.asked}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              className="list-rejected-button"
              basic
              color={'red'}
              fluid
              onClick={e => handleAnswer({ value: ask, answer: Actions.rejected, index })}
            >
                Rejected
              </Button>
            <Button
              className="list-accepted-button"
              basic
              color={'green'}
              fluid
              onClick={e => handleAnswer({ value: ask, answer: Actions.accepted, index })}
            >
                Accepted
              </Button>
          </Card.Content>
        </Card>
        ))}
  </div>
);
