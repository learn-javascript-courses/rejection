import React from 'react';
import { Button, Card, Segment, Container } from 'semantic-ui-react';
import * as Actions from '../actions';
import ListItems from './list-items';

export default function List({ list, handleAnswer }) {
  if (list.length <= 0) return <div />;
  return (
    <Container>
      <Segment padded>
        <ListItems list={list} handleAnswer={handleAnswer} />
      </Segment>
    </Container>
  );
}
