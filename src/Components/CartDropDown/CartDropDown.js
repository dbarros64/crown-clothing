import React from 'react';

import CustomButton from '../Custom-Button/CustomButton';
import './cart-drop-down.styles.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


export default CartDropDown;