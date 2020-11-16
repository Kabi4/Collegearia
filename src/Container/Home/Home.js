import React, { Component } from 'react';
import {
    Body,
    EarnRepo,
    Footer,
    Header,
    PersonalApp,
    SeekingFor,
    StudentMentorSection,
    WhyUs,
} from './../../Components/index';
import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="home__main">
                    <Header pageCondition="Get Started" />
                    <Body />
                </div>
                <WhyUs />
                <PersonalApp />
                <EarnRepo />
                <StudentMentorSection />
                <SeekingFor />
                <Footer />
            </>
        );
    }
}
