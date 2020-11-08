import React, { Component } from 'react';
import { Body, Footer, Header } from './../../Components/index';
import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="home__main">
                    <Header />
                    <Body />
                </div>
                <Footer />
            </>
        );
    }
}
