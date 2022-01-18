import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import AllStyles from './components/AllStyles';
import { Login, Signup } from './components/AuthForm';
import SingleStyle from './components/SingleStyle';
import Home from './components/Home';
import { me } from './store';
import Inventory from './components/Inventory';
import AllUsers from './components/AllUsers';
import EditStyles from './components/EditStyles';
import AddStyle from './components/AddStyle';
import UserAccount from './store/userAccount';
import HomePage from './components/HomePage';
import AdminUser from './components/Admin';
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/account" component={UserAccount} />
          <Route exact path="/admin" component={AdminUser} />
          <Route exact path="/styles" component={AllStyles} />
          <Route exact path="/styles/edit/:id" component={EditStyles} />
          <Route exact path="/add" component={AddStyle} />
          <Route exact path="/styles/:name" component={SingleStyle} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/allusers" component={AllUsers} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Routes));
