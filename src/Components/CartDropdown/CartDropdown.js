import React from 'react';

import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default CartDropdown;