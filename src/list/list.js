import React from 'react';
import { Button, Card, Segment, Container } from 'semantic-ui-react';
import ListItems from './list-items';

export default function List({ list = [], handleRejected, handleAccepted }) {
  if (Object.keys(list).length <= 0) return <div />;
  return (
    <Container>
      <Segment padded>
        <ListItems list={list} rejected={handleRejected} accepted={handleAccepted} />
      </Segment>
    </Container>
  );
}
