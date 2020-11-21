import React, { useState } from 'react';
import Logo from '../../Assets/Images/Logo.png';
import './Authentication.css';
// import { SignIn, SignUp } from '../../Components';
import asyncComponent from '../../HOC/LazyLoading/asyncImportingModules';
import { Link } from 'react-router-dom';

const SignIn = asyncComponent(() => {
    return import('../../Components/Signin/Signin');
});
const SignUp = asyncComponent(() => {
    return import('../../Components/Signup/Signup');
});

const Authentication = () => {
    const [currentState, setCurrentState] = useState('signin');
    const switchToAlter = () => {
        setCurrentState((prevState) => (prevState === 'signin' ? 'signup' : 'signin'));
    };
    return (
        <div className="authentication__container">
            <div className="authentication">
                <Link to="/">
                    <img className="authentication__logo userSelect" src={Logo} alt="Logo" />
                </Link>
                <Link to="/">
                    <h1 className="authentication__title userSelect">Collegearia</h1>
                </Link>
                {currentState === 'signin' ? (
                    <SignIn switchToAlter={switchToAlter} />
                ) : (
                    <SignUp switchToAlter={switchToAlter} />
                )}
            </div>
        </div>
    );
};

export default Authentication;
