import React from 'react';
import moment from 'moment';
import { Segment, Card, Container, Button } from 'semantic-ui-react';

export default ({ history = [], clearHistory, addToHistory, deleteFromHistory } = {}) => {
  if (history.length <= 0) return <div />;
  return (
    <Container fluid>
      <Segment>
        <Button
          className="clear-history"
          compact
          floated={'right'}
          basic
          type={'button'}
          onClick={clearHistory}
        >
          {'Clear History'}
        </Button>
        <br />
        {history.map(item => (
          <Card
            className="history-result"
            centered
            key={item.id}
            color={item.result === 'REJECTED' ? 'red' : 'green'}
          >
            <Card.Header className="history-asked-for">You Asked For : {item.asked}</Card.Header>
            <Card.Meta className="history-date">
              Date: {moment(item.time).format('LLLL')}
            </Card.Meta>
            <Card.Description className="history-asked">You Asked : {item.person}</Card.Description>
            <Card.Content extra>{item.result}</Card.Content>
            <Button
              className="delete-history"
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
  );
};
