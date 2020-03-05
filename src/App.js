import React from 'react';
import Header from "./components/Header";
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

const ROUTES = {
    home: '/home',
    scorePage: '/scores',
};

export default function App() {
      return (
            <div className="App">
                <Router>
                    <Header className="App-header"/>
                    <Switch>
                        <Route exect path={ROUTES.home} component={Home} />
                        <Route exect path={ROUTES.scorePage} component={Home} />
                        <Route path="/" render={() => <Redirect to={ROUTES.home} />} />
                    </Switch>
                </Router>
            </div>
      );
}
