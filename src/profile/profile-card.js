import React from 'react';
import { Icon, Item } from 'semantic-ui-react';

const ProfileCard = props =>
  <Item>
    <Item.Image src={props.photoURL} width={'250px'} centered size="small" />
    <Item.Content verticalAlign="middle">
      <Item.Header>
        <Icon name="favorite" />
        {props.displayName}
      </Item.Header>
    </Item.Content>
  </Item>;

export default ProfileCard;
