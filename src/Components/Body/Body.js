import React from 'react';
import { Button } from '@material-ui/core';
import './Body.css';
const Body = () => {
    return (
        <div className="body">
            <h1 className="body__header__primary">Wandering About what should you do?</h1>
            <h2 className="body__header__secondary">It's never bad to ask your Senior.........</h2>
            <p className="body__header__content">
                Connect with your college buddies to ask and clear your doubts. Answer there questions , Ask your
                questions,Help Each other to grow......
            </p>
            <p className="body__header__detail">Want to learn Courses with us?</p>
            <div className="body__header__buttons">
                <Button className="body__header__button">See Our Projects</Button>
                <Button className="body__header__button">View Courses</Button>
            </div>
        </div>
    );
};

export default Body;
