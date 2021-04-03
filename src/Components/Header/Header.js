import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../Assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { signOutStart } from '../../Redux/User/user.actions';

import './Header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={signOutStart}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null :<CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);