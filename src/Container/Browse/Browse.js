import React, { Component } from 'react';
// import {
//     Badges,
//     Body,
//     Header,
//     HelpAndSupport,
//     Questions,
//     Sidebar,
//     User,
//     UserAnswers,
//     UserQuestions,
//     WhyUs,
// } from '../../Components/index';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import './Browse.css';
import asyncComponent from '../../HOC/LazyLoading/asyncImportingModules';

const Badges = asyncComponent(() => {
    return import('../../Components/Badges/Badges');
});
const Body = asyncComponent(() => {
    return import('../../Components/Body/Body');
});
const Header = asyncComponent(() => {
    return import('../../Components/Header/Header');
});
const HelpAndSupport = asyncComponent(() => {
    return import('../../Components/HelpAndSupport/HelpAndSupport');
});
const Questions = asyncComponent(() => {
    return import('../../Components/Questions/Questions');
});
const Sidebar = asyncComponent(() => {
    return import('../../Components/Sidebar/Sidebar');
});
const User = asyncComponent(() => {
    return import('../../Components/User/User');
});
const UserAnswers = asyncComponent(() => {
    return import('../../Components/UserAnswers/UserAnswers');
});
const UserQuestions = asyncComponent(() => {
    return import('../../Components/UserQuestions/UserQuestions');
});
const WhyUs = asyncComponent(() => {
    return import('../../Components/HOMEUI/WhyUs/WhyUs');
});

class Browse extends Component {
    render() {
        return (
            <div>
                <Header pageCondition="Hey,User" />
                <Sidebar />
                <Switch>
                    <Route path={`${this.props.match.path}${Routes.USERDETAILS}`}>
                        <User />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.USERHOME}`}>
                        <Questions />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.USERQUESTIONS}`}>
                        <UserQuestions />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.USERANSWERS}`}>
                        <UserAnswers />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.USERBADGES}`}>
                        <Badges />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.HELPSUPPORT}`}>
                        <HelpAndSupport />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.OURMOTTO}`}>
                        <Body additionalClass={['browse__content', 'topZero']} />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.WHYUS}`}>
                        <WhyUs additionalClass={['browse__content', 'topZero']} />
                    </Route>
                    <Route path={`${this.props.match.path}${Routes.HELPSUPPORTALTER}`}>
                        <HelpAndSupport />
                    </Route>
                    <Redirect to={`${this.props.match.path}/user-home`} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Browse);
