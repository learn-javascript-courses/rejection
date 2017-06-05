import React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';

export default ({ clearScore, points, savePoints }) =>
  <Container textAlign={'center'}>
    <Segment padded>
      <div className="points-points-total">Points {points}</div>
    </Segment>
  </Container>;
