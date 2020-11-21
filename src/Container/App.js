import './App.css';
// import { Home, Browse, Authenticate, Learning, Community, Contact, About } from './index';
import { Switch, Redirect } from 'react-router-dom';
import { ProtectedRoutes, RedirectRoutes } from '../Helpers/RoutesManager';
import * as Routes from '../Routes/Routes';
import asyncComponent from '../HOC/LazyLoading/asyncImportingModules';

const AsyncHome = asyncComponent(() => {
    return import('./Home/Home');
});
const AsyncBrowse = asyncComponent(() => {
    return import('./Browse/Browse');
});
const AsyncAuthenticate = asyncComponent(() => {
    return import('./Authentication/Authentication');
});
const AsyncLearning = asyncComponent(() => {
    return import('./Learning/Learning');
});
const AsyncCommunity = asyncComponent(() => {
    return import('./Community/Community');
});
const AsyncContact = asyncComponent(() => {
    return import('./Contact/Contact');
});
const AsyncAbout = asyncComponent(() => {
    return import('./About/About');
});

function App() {
    const user = {};
    return (
        <div className="App">
            <Switch>
                <RedirectRoutes user={user} fallbackRoute={Routes.BROWSE} exact path={Routes.HOME}>
                    <AsyncHome />
                </RedirectRoutes>
                <RedirectRoutes user={user} fallbackRoute={Routes.BROWSE} exact path={Routes.AUTHENTICATION}>
                    <AsyncAuthenticate />
                </RedirectRoutes>
                <ProtectedRoutes user={user} fallbackRoute={Routes.AUTHENTICATION} path={Routes.COMMUNITY}>
                    <AsyncCommunity />
                </ProtectedRoutes>
                <ProtectedRoutes user={user} fallbackRoute={Routes.AUTHENTICATION} path={Routes.CONTACT}>
                    <AsyncContact />
                </ProtectedRoutes>
                <ProtectedRoutes user={user} fallbackRoute={Routes.AUTHENTICATION} path={Routes.ABOUT}>
                    <AsyncAbout />
                </ProtectedRoutes>
                <ProtectedRoutes user={user} fallbackRoute={Routes.AUTHENTICATION} path={Routes.LEARNING}>
                    <AsyncLearning />
                </ProtectedRoutes>
                <ProtectedRoutes user={user} fallbackRoute={Routes.AUTHENTICATION} path={Routes.LEARNING}>
                    <AsyncLearning />
                </ProtectedRoutes>
                <ProtectedRoutes user={user} fallbackRoute={Routes.AUTHENTICATION} path={Routes.BROWSE}>
                    <AsyncBrowse />
                </ProtectedRoutes>
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
