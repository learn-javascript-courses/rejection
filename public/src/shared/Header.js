import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser, resetUser } from '../user/actions';

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
     this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) { 
    if(this.props.user.user && !nextProps.user.user) {
      this.context.router.push('/');
    }
  }

  renderSignInLinks(authenticatedUser) {
    if(authenticatedUser) {
      return (
        <ul className="flex-list">
            <li>      
              <Link to="/profile">
             {authenticatedUser.email}'s Profile 
              </Link>
            </li>
            <li>      
              <a  onClick={this.props.logout} href="javascript:void(0)">
              Log out
              </a>
            </li>
            	<li>      
      				<Link to="/new-question">
      				Submit New Question
    					</Link>
            </li>
        </ul>
      );
    } else {

    return (
      <ul className="flex-list">
          <li>      
            <Link  to="/login">
            Sign In
            </Link>
          </li>
          <li>      
            <Link to="/register">
            New User Sign Up
            </Link>
          </li>
      </ul>
   );
    }
  }
	renderLinks() {
		const { 
      // type, 
      authenticatedUser } = this.props;
       return (
        <div>
         {this.renderSignInLinks(authenticatedUser)}
        </div>
  		 );	
	};

	render() {
			return (
			 <nav>
			      {this.renderLinks()}
			 </nav>				
			);
	}
}

function mapStateToProps(state) {
  return { 
    authenticatedUser: state.userState.isAuthenticated === 'yes' ? state.userState.user : null,
    user: state.userState
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
     logout: () => {
         localStorage.removeItem('token');
         dispatch(logoutUser());
     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);