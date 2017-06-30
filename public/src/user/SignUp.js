import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import renderField from '../helpers/renderField';
import { validateNewUser, validateAndSignUpUser } from '../helpers/form';


class SignUpForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
     if (nextProps.user.isAuthenticated === 'yes' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/');
    }
      if (nextProps.user.isAuthenticated === 'no' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(`Something went wrong. ${nextProps.user.error.message}`);
    }
  }

  render() {
   const { handleSubmit, submitting } = this.props;
    return (
      <div className='container'>
        <form onSubmit={ handleSubmit(validateAndSignUpUser) }>
          <Field
                 name="firstName"
                 type="text"
                 component={ renderField }
                 label="First Name" />
          <Field
          name="lastName"
          type="text"
          component={ renderField }
          label="Last Name" />
          <Field
                 name="email"
                 type="email"
                 component={ renderField }
                 label="Email Address" />
          <Field
                 name="password"
                 type="password"
                 component={ renderField }
                 label="Password" />
          <Field
                 name="confirmPassword"
                 type="password"
                 component={ renderField }
                 label="Re-enter Password" />
          <div>
            <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ submitting }>
              Submit
            </button>
            <Link
                  to="/"
                  className="btn btn-error"> Cancel
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

SignUpForm = reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
  fields: ['firstName', 'lastName', 'password', 'email'],
  validateNewUser, // <--- validation function given to redux-form
})(SignUpForm)

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userState
  }
}


SignUpForm = connect(mapStateToProps)(SignUpForm);

export default SignUpForm;



