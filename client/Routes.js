import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Cart from './components/Cart';
import AllStyles from './components/AllStyles';
import { Login, Signup } from './components/AuthForm';
import SingleStyle from './components/SingleStyle';
import Home from './components/Home';
import { me } from './store';
import UserAccount from './components/AllUsers';
import Inventory from './components/Inventory';
import AllUsers from './components/AllUsers';
import EditStyles from './components/EditStyles';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />

            {/* <Redirect to="/home" /> */}
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={AllStyles} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
        <Switch>
          <Route exact path="/account" component={UserAccount} />
          <Route exact path="/styles" component={AllStyles} />
          <Route exact path="/styles/edit/:id" component={EditStyles} />
          <Route exact path="/styles/:name" component={SingleStyle} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/allusers" component={AllUsers} />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
