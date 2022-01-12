import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="landingPage">
      <form onSubmit={handleSubmit} name={name}>
        <div className="textfield">
          <input name="username" type="text" placeholder="username" />
        </div>
        <div className="textfield">
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button type="submit" className="button-1" id={name}>
            {displayName}
          </button>
          {/* <button type="submit" className="button-54">
            {if(displayName === 'Login') {
              Sign Up
            }}
          </button> */}
          {name === 'login' ? (
            <div className="formLinkText">
              <p>New Member?</p>
              <div>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          ) : (
            <div className="formLinkText">
              <p>Already a Member?</p>
              <div>
                <Link to="/login">Log In</Link>
              </div>
            </div>
          )}
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
