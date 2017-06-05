import React from 'react';
import { Button, Card, Segment, Container } from 'semantic-ui-react';

export default ({ list = {}, rejected = () => {}, accepted = () => {} } = {}) =>
  <div className="list-items">
    {Object.keys(list).map(
      (id, index) =>
        list[id].result === undefined
          ? <Card raised centered key={id}>
            <Card.Content>
              <Card.Header className="list-person">
                  You Asked : {list[id].person.toUpperCase()}
              </Card.Header>
              <Card.Meta />
              <Card.Description className="list-asked">
                  For : {list[id].asked}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button
                className="list-rejected-button"
                color={'red'}
                fluid
                onClick={rejected}
                data={{ ...list[id], result: 'REJECTED' }}
              >
                  Rejected
                </Button>
              <Button
                className="list-accepted-button"
                color={'green'}
                fluid
                onClick={accepted}
                data={{ ...list[id], result: 'ACCEPTED' }}
              >
                  Accepted
                </Button>
            </Card.Content>
          </Card>
          : null
    )}
  </div>;
