import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header';
import CheckOut from './Pages/CheckOut/CheckOut';

import SignInAndSignUp from './Pages/SignIn-and-SignUp/SignIn-and-SignUp';


import { selectCurrentUser } from './Redux/User/user.selector';
import { checkUserSession } from './Redux/User/user.actions';
import { createStructuredSelector } from 'reselect';
import './App.css';




class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };


  render() {
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOut} />
        <Route exact path='/signin' 
          render={() => 
          this.props.currentUser ? 
          (<Redirect to='/' />): (<SignInAndSignUp />) } />
      </Switch>
    </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
