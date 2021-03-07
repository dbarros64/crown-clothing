import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckOutItem from '../../Components/CheckOutItem/CheckOutItem';


import { selectCartItems, selectCartTotal } from '../../Redux/Cart/cart.selectors';
import StripeCheckoutButton from '../../Components/Stripe-Button/Stripe-Button';

import './checkout.styles.scss';

const CheckOutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>             
        </div>
        {cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
         ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            *Please use the test credit card number for payments*
            <br />
            4242 4242 4242 4242 Exp: 1/22 CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});


export default connect(mapStateToProps)(CheckOutPage);

