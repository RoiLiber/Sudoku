import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { clearState, newGamePopUp, isGameDone } from "../../actions/mainActions";
import './style.scss';

export default function SetWinPopUp() {
    const dispatch = useDispatch();
    const gameTime = useSelector(state => state.mainReducer.gameTime);
    const sec = gameTime.clockSec < 10 ? `0${gameTime.clockSec}` : gameTime.clockSec;
    const min = gameTime.clockMin < 10 ? `0${gameTime.clockMin}` : gameTime.clockMin;

    function playAgain() {
        dispatch(newGamePopUp(true));
        dispatch(isGameDone(false));
    }

    return (
        <div className={'select_action_wrapper'}>
            <span className={'time'}>Your Time is {min}:{sec}</span>
            <div className={'buttons_wrapper'}>
                <Button
                    className={'stop_game'}
                    variant="text"
                    onClick={() => dispatch(clearState())}
                >
                    Done
                </Button>
                <Button
                    className={'stop_game'}
                    variant="text"
                    onClick={() => playAgain()}
                >
                    Play Again
                </Button>
            </div>
        </div>
    )
}
