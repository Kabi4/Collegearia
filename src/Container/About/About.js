import React, { Component } from 'react';
import { BuildingPage, Header, Sidebar } from '../../Components/index';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import * as Routes from '../../Routes/Routes';
import './About.css';
class About extends Component {
    render() {
        return (
            <div>
                <Header pageCondition="Hey,User" />
                <Sidebar />
                <Switch>
                    <Route path={`${'/about'}${Routes.TECHS}`}>
                        <BuildingPage title="Technologies" />
                    </Route>
                    <Route path={`${'/about'}${Routes.PLANS}`}>
                        <BuildingPage title="Plans" />
                    </Route>
                    <Route path={`${'/about'}${Routes.ROADMAP}`}>
                        <BuildingPage title="Roadmap" />
                    </Route>
                    <Route path={`/`}>
                        <BuildingPage title="About" />
                    </Route>
                    <Redirect to={`${'/about'}`} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(About);
