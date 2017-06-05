import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import ProfileCard from './profile-card';

const UserProfileModal = props =>
  <Modal
    trigger={
      <button display={'none'}>
        <ProfileCard photoURL={props.photoURL} displayName={props.displayName} />
      </button>
    }
  >
    <Modal.Header>{props.displayName}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={props.photoURL} />
      <Modal.Description>
        <Header>User Profile Data</Header>
        {`You Logged in from ${props.providerId}`}
      </Modal.Description>
    </Modal.Content>
  </Modal>;

export default UserProfileModal;
