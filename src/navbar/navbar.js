import React, { Component } from 'react';
import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Link href="/login" replace>
          <Menu.Item
            name="Login"
            active={activeItem === 'Login'}
            content="Login"
            to="/login"
            onClick={this.handleItemClick}
          />
        </Link>
        <Link href="/" replace>
          <Menu.Item
            name="Ask"
            active={activeItem === 'Ask'}
            content="Main"
            to="/"
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    );
  }
}
