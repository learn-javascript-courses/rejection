import React from 'react';
import { Segment, Container, Grid, Dimmer, Loader, Label } from 'semantic-ui-react';

const LoadingScreen = props =>
  <Container textAlign={'center'}>
    <Grid.Row />
    <Segment>
      <Dimmer active page>
        <Loader size="small">
          <Label pointing>Signing In</Label>
        </Loader>
      </Dimmer>
    </Segment>
  </Container>;

export default LoadingScreen;
