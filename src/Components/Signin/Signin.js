import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Signin.css';
const Signin = ({ switchToAlter, ...props }) => {
    const [error, setError] = useState('null');
    const [loading, setloading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        setError(null);
        setloading(false);
    }, []);
    const isDisbaled = email === '' || password === '' || password.length < 8;
    return (
        <div className="authentication__auth">
            {error && <h2 className="authenticate__error">{error}</h2>}
            <input className="signin__email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                className="signin__password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button disabled={loading || isDisbaled} variant="outlined" className="signin__button">
                SignIn
            </Button>

            <h2 className="signin__switch">
                New to Collegearia? Switch to{' '}
                <span style={{ color: 'lawngreen', cursor: 'pointer' }} onClick={switchToAlter}>
                    SingUp
                </span>
            </h2>
        </div>
    );
};

export default Signin;
