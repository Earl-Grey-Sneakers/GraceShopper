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
import AccountOverview from './components/UserPage'
import HomePage from './components/HomePage';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/account" component={AccountOverview} />
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

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(null, mapDispatch)(Routes));
