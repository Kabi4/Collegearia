import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Button, Checkbox } from '@material-ui/core';
const Signup = ({ switchToAlter, ...props }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('null');
    const [loading, setloading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreement, setAgreement] = useState(false);
    useEffect(() => {
        setError(null);
        setloading(false);
    }, []);
    const isDisbaled =
        email === '' ||
        password === '' ||
        password.length < 8 ||
        username.length < 8 ||
        username === '' ||
        agreement === false;
    return (
        <div className="authentication__auth">
            {error && <h2 className="authenticate__error">{error}</h2>}
            <input
                className="signup__username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className="signup__email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                className="signup__password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label style={{ fontSize: '12px', fontWeight: '800', display: 'flex', alignItems: 'center' }}>
                <Checkbox value={agreement} onClick={() => setAgreement((prevState) => !prevState)} />I Agree to terms &
                Conditions.
            </label>
            <Button disabled={loading || isDisbaled} variant="outlined" className="signup__button">
                SignUp
            </Button>
            <h2 className="signup__switch">
                Already a user? Switch to{' '}
                <span style={{ color: 'red', cursor: 'pointer' }} onClick={switchToAlter}>
                    SingIn
                </span>
            </h2>
        </div>
    );
};

export default Signup;
