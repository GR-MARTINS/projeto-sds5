import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
