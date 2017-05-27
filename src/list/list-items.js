import React from 'react';
import { Button, Card, Segment, Container } from 'semantic-ui-react';

export default ({ list = [], rejected = () => {}, accepted = () => {} } = {}) => (
  <div className="list-items">
    {list.map((ask, index) => (
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
            color={'red'}
            fluid
            onClick={rejected}
            data={{ ...ask, result: 'REJECTED' }}
          >
            Rejected
          </Button>
          <Button
            className="list-accepted-button"
            color={'green'}
            fluid
            onClick={accepted}
            data={{ ...ask, result: 'ACCEPTED' }}
          >
            Accepted
          </Button>
        </Card.Content>
      </Card>
    ))}
  </div>
);
