import React, { Component } from 'react';
// import { BuildingPage, Header, HelpAndSupport, Sidebar } from '../../Components/index';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import './Contact.css';

import asyncComponent from '../../HOC/LazyLoading/asyncImportingModules';

const Header = asyncComponent(() => {
    return import('../../Components/Header/Header');
});
const Sidebar = asyncComponent(() => {
    return import('../../Components/Sidebar/Sidebar');
});
const BuildingPage = asyncComponent(() => {
    return import('../../Components/BuildingPage/BuildingPage');
});
const HelpAndSupport = asyncComponent(() => {
    return import('../../Components/HelpAndSupport/HelpAndSupport');
});

class Contact extends Component {
    render() {
        return (
            <div>
                <Header pageCondition="Hey,User" />
                <Sidebar />
                <Switch>
                    <Route path={`${'/contact'}${Routes.JOIN}`}>
                        <BuildingPage title="Join Us" />
                    </Route>
                    <Route path={`${'/contact'}${Routes.EMAIL}`}>
                        <HelpAndSupport />
                    </Route>
                    <Route path={`${'/contact'}${Routes.LEAVECOMMENT}`}>
                        <HelpAndSupport />
                    </Route>
                    <Route path={`/`}>
                        <BuildingPage title="Contact" />
                    </Route>
                    <Redirect to={`${'/contact'}`} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Contact);
