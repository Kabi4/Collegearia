import './App.css';
import { Home, Browse } from './index';
import { Route, Switch, Redirect } from 'react-router-dom';
function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/browse">
                    <Browse />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
