import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ISUwuLEMvkEm1HFG1UX0MrV40YuLItakQ034Xf7fH1VADEXOc1QSCtU7hUlxCSflUYC5ahVBTGdjz4QQrzmMOXL009rPmKKdu';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please be sure you use the provided credit card number');
        }); 
    }


    return (
        <StripeCheckOut
            label='Pay Now'
            name='Crown Clothing, LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;