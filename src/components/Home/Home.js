import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { newGamePopUp } from '../../actions/mainActions'
import PopUp from "../PopUp";
import GamePage from "../GamePage/GamePage";
import './style.scss';
import Loader from "../Loader";

export default function Home() {
    const dispatch = useDispatch();
    const setNewGameLevel = useSelector(state => state.mainReducer.setNewGameLevel);
    const newGameData = useSelector(state => state.mainReducer.newGameData);
    const loader = useSelector(state => state.mainReducer.loader);

    return (
        <div className={'home'}>
            <span>Sudoku Game</span>
            {newGameData
                ? <GamePage/>
                    : <Button
                    className={'selected'}
                    variant="text"
                    onClick={() => dispatch(newGamePopUp(true))}
                >
                    Start a new game
                </Button>
            }
            {setNewGameLevel && <PopUp title={'Select Level:'}/>}
            {loader && <Loader/>}
        </div>
    )
}
