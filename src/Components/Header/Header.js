import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';

import { auth } from '../../Firebase/firebaseConfig';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors';
import { selectCurrentUser } from '../../Redux/User/user.selectors';

import { ReactComponent as Logo } from '../../Assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden  }) => (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {
          currentUser ? 
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null :
        <CartDropDown />
      }
    </HeaderContainer>
  );

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);