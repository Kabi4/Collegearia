import React from 'react';
import './PRIVATEAPPDES.css';
import { Button } from '@material-ui/core';
const PRIVATEAPPDES = () => {
    return (
        <div className="privateAppDes">
            <h1>Your Pesonal Helper for Your Bright Carrier</h1>
            <p>Join us today learn from other who are much more eligible to tell you about your college.</p>
            <div style={{ textAlign: 'center' }}>
                <Button className="privateAppDes__button" variant="outlined">
                    Join Now
                </Button>
            </div>
        </div>
    );
};

export default PRIVATEAPPDES;
