import React from 'react';
import Header from "./components/Header";
import Home from './components/Home';
import ScorePage from './components/ScorePage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './consts';
import { useSelector } from "react-redux";
import PopUpWrapper from "./components/UI/PopUpWrapper";
import SetLevelPopUp from "./components/SetLevelPopUp";
import SetWinPopUp from './components/SetWinPopUp';
import Loader from "./components/UI/Loader";
import './App.scss';

export default function App() {
    const setNewGameLevel = useSelector(state => state.mainReducer.setNewGameLevel);
    const gameDone = useSelector(state => state.mainReducer.gameDone);
    const loader = useSelector(state => state.mainReducer.loader);
    const popUp = setNewGameLevel || gameDone;

      return (
            <div className="App">
                <Router>
                    <Header className="App-header"/>
                    <Switch>
                        <Route exect path={ROUTES.home} component={Home} />
                        <Route exect path={ROUTES.scorePage} component={ScorePage} />
                        <Route path="/" render={() => <Redirect to={ROUTES.home} />} />
                    </Switch>
                    {popUp && <PopUpWrapper
                        title={gameDone ? 'Nice You Did It' : 'Select Level:'}
                        children={gameDone ? <SetWinPopUp/> : <SetLevelPopUp/>}
                    />}
                    {loader && <Loader/>}
                </Router>
            </div>
      );
}
