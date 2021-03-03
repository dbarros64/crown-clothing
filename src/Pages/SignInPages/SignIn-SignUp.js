import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>SIGN IN
        <SignIn />
        <SignUp />
    </div>
)


export default SignInAndSignUpPage;