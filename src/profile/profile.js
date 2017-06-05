import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, Container, Dropdown, Menu } from 'semantic-ui-react';
import * as profileActions from './profile-reducer';
import ProfileModal from './profile-modal';

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(profileActions, dispatch) });
const mapStateToProps = state => profileActions.getProfile(state);

class Profile extends Component {
  state = { activeItem: 'account' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <ProfileModal
          photoURL={this.props.photoURL}
          email={this.props.email}
          displayName={this.props.displayName}
          providerId={this.props.providerId}
        />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
