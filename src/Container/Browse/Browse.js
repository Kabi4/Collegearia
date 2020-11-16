import React, { Component } from 'react';
import { Badges, Header, Questions, Sidebar } from '../../Components/index';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './Browse.css';
class Browse extends Component {
    render() {
        return (
            <div>
                <Header pageCondition="Hey,User" />
                <Sidebar />
                <Switch>
                    <Route path={`${this.props.match.path}/user-details`}>
                        <h1 className="browse__content">User</h1>
                    </Route>
                    <Route path={`${this.props.match.path}/user-home`}>
                        <Questions />
                    </Route>
                    <Route path={`${this.props.match.path}/user-questions`}>
                        <h1 className="browse__content">Question Asked</h1>
                    </Route>
                    <Route path={`${this.props.match.path}/user-answers`}>
                        <h1 className="browse__content">Answer Given</h1>
                    </Route>
                    <Route path={`${this.props.match.path}/user-bagde`}>
                        <Badges />
                    </Route>
                    <Route path={`${this.props.match.path}/help`}>
                        <h1 className="browse__content">Help and Support</h1>
                    </Route>
                    <Redirect to={`${this.props.match.path}/user-home`} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Browse);
