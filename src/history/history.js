import React from 'react';
import moment from 'moment';
import { Segment, Card, Container, Button } from 'semantic-ui-react';

export default ({ history = [], clearHistory, addToHistory, deleteAsk } = {}) => {
  if (Object.keys(history).length <= 0) return <div />;
  return (
    <Container fluid>
      <Segment>
        {Object.keys(history).map(id => (
          <Card
            className="history-result"
            centered
            key={id}
            color={history[id].result === 'REJECTED' ? 'red' : 'green'}
          >
            <Card.Header className="history-asked-for">
              You Asked For : {history[id].asked}
            </Card.Header>
            <Card.Meta className="history-date">
              Date: {moment(history[id].time).format('LLLL')}
            </Card.Meta>
            <Card.Description className="history-asked">
              You Asked : {history[id].person}
            </Card.Description>
            <Card.Content extra>{history[id].result}</Card.Content>
            <Button
              className="delete-history"
              basic
              type={'button'}
              color={history[id].result === 'REJECTED' ? 'red' : 'green'}
              onClick={deleteAsk}
              data={history[id]}
            >
              {'Delete From History'}
            </Button>
          </Card>
        ))}
      </Segment>
    </Container>
  );
};
