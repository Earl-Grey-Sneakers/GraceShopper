import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import AllStyles from './components/AllStyles';
import { Login, Signup } from './components/AuthForm';
import SingleStyle from './components/SingleStyle';
import UserAccount from './components/UserAccount';
import HomePage from './components/HomePage';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/account" component={UserAccount} />
          <Route exact path="/styles" component={AllStyles} />
          <Route path="/styles/:name" component={SingleStyle} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Routes));