import React, { Component } from 'react';
import { Body, EarnRepo, Footer, Header, PersonalApp } from './../../Components/index';
import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="home__main">
                    <Header />
                    <Body />
                </div>
                <PersonalApp />
                <EarnRepo />
                <Footer />
            </>
        );
    }
}
