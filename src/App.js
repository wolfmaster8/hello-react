import React from 'react';
import LoginPage from './pages/LoginPage';
import MainRoutes from './MainRoutes';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <MainRoutes />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
