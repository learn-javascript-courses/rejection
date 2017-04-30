import React from 'react';
import { Segment, Card, Container, Button } from 'semantic-ui-react';

export default ({
                  history,
                  clearHistory,
                  addToHistory,
                  deleteFromHistory
}) => history.length > 0 ? (
  <Container fluid>
    <Segment>
      <Button
        compact
        floated={'right'}
        basic type={'button'}
        onClick={clearHistory}
      >
        {'Clear History'}
      </Button>
      <br />
      {history.map((item, index) => (
        <Card
          centered
          key={item + Date.now() + item.person + item.time}
          color={item.result === 'REJECTED' ? 'red' : 'green'}
        >
          <Card.Header>You Asked For : {item.asked}</Card.Header>
          <Card.Meta>Date: {item.time} </Card.Meta>
          <Card.Description>You Asked : {item.person}</Card.Description>
          <Card.Content extra>{item.result}</Card.Content>
          <Button
            basic
            type={'button'}
            color={item.result === 'REJECTED' ? 'red' : 'green'}
            onClick={() => deleteFromHistory(item.id)}
          >
            {'Delete From History'}
          </Button>
        </Card>
    ))}
    </Segment>
  </Container>
) : (
  <div />
);
