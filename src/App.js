import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/Shop/Shop';
import SignInAndSignUpPage from './Pages/SignInPages/SignIn-SignUp';
import Header from './Components/Header/Header';
import { auth, createUserProfileDocument } from './Firebase/firebaseConfig';
import { setCurrentUser } from './Redux/User/user.actions';




class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() => 
            this.props.currentUser ? (
            <Redirect to='/' />
            ) : (
            <SignInAndSignUpPage />
            )
          }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  ) (App);