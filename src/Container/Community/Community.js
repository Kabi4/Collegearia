import React, { Component } from 'react';
// import { BuildingPage, Header, Sidebar } from '../../Components/index';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import asyncComponent from '../../HOC/LazyLoading/asyncImportingModules';
import './Community.css';

const BuildingPage = asyncComponent(() => {
    return import('../../Components/BuildingPage/BuildingPage');
});
const Header = asyncComponent(() => {
    return import('../../Components/Header/Header');
});
const Sidebar = asyncComponent(() => {
    return import('../../Components/Sidebar/Sidebar');
});

class Commuinty extends Component {
    render() {
        return (
            <div>
                <Header pageCondition="Hey,User" />
                <Sidebar />
                <Switch>
                    <Route path={`${'/community'}${Routes.INNOVATION}`}>
                        <BuildingPage title="Innovation" />
                    </Route>
                    <Route path={`${'/community'}${Routes.IDEA}`}>
                        <BuildingPage title="Idea" />
                    </Route>
                    <Route path={`${'/community'}${Routes.OURTEAM}`}>
                        <BuildingPage title="Our Team" />
                    </Route>
                    <Route path={`/`}>
                        <BuildingPage title="Community" />
                    </Route>
                    <Redirect to={`${'/community'}`} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Commuinty);
