import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ChecOutItem from '../../Components/CheckOutItem/CheckOutItem';
import StripeCheckoutButton from '../../Components/StripeButton/StripeButton';


import { selectCartItems, selectCartTotal } from '../../Redux/Cart/cart.selectors';

import './CheckOut.styles.scss';

const CheckOut = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-blocks'>
                <span>Product</span>
            </div>
            <div className='header-blocks'>
                <span>Description</span>
            </div>
            <div className='header-blocks'>
                <span>Quantity</span>
            </div>
            <div className='header-blocks'>
                <span>Price</span>
            </div>
            <div className='header-blocks'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <ChecOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            *Please use the following test credit card info for payments
            <br />
            4242 4242 4242 4242 ---EXP. 01/22 --CVV: 123
        </div>
       
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps) (CheckOut);