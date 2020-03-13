import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { newGamePopUp } from '../../actions/mainActions'
import GamePage from "../GamePage/GamePage";
import './style.scss';

export default function Home() {
    const dispatch = useDispatch();
    const newGameData = useSelector(state => state.mainReducer.newGameData);

    return (
        <div className={'home'}>
            <span>Play Sudoku</span>
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
        </div>
    )
}
