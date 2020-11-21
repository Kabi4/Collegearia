import React, { Component } from 'react';
// import { BuildingPage, Header, Sidebar } from '../../Components/index';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import asyncComponent from '../../HOC/LazyLoading/asyncImportingModules';
import './Learning.css';
const Header = asyncComponent(() => {
    return import('../../Components/Header/Header');
});
const Sidebar = asyncComponent(() => {
    return import('../../Components/Sidebar/Sidebar');
});
const BuildingPage = asyncComponent(() => {
    return import('../../Components/BuildingPage/BuildingPage');
});
class Learning extends Component {
    render() {
        return (
            <div>
                <Header pageCondition="Hey,User" />
                <Sidebar />
                <Switch>
                    <Route path={`${'/learning'}${Routes.REACT}`}>
                        <BuildingPage title="REACT" />
                    </Route>
                    <Route path={`${'/learning'}${Routes.CSS}`}>
                        <BuildingPage title="ADVANCE CSS" />
                    </Route>
                    <Route path={`${'/learning'}${Routes.FULLSTACK}`}>
                        <BuildingPage title="FULL STACK" />
                    </Route>
                    <Route path={`${'/learning'}${Routes.JS}`}>
                        <BuildingPage title="JS" />
                    </Route>
                    <Route path={`/`}>
                        <BuildingPage title="Learning" />
                    </Route>
                    <Redirect to={`${'/learning'}`} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Learning);
