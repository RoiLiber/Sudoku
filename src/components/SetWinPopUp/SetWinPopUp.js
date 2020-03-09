import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { clearState, newGamePopUp, isGameDone } from "../../actions/mainActions";
import './style.scss';

export default function SetWinPopUp() {
    const dispatch = useDispatch();
    const gameTime = useSelector(state => state.mainReducer.gameTime);
    const seconds = gameTime && gameTime.clockSec;
    const minutes = gameTime && gameTime.clockMin;
    const clockSec = seconds < 10 ? `0${seconds}` : seconds;
    const clockMin = minutes < 10 ? `0${minutes}` : minutes;

    function playAgain() {
        dispatch(newGamePopUp(true));
        dispatch(isGameDone(false));
    }

    function setGameScore() {
        const score = { seconds, minutes };
        const scoresTable = localStorage.getItem('scoresTable');
        const scores = JSON.parse(scoresTable);
        const newScoreList = scores !== null ? [...scores, score] : [score];

        localStorage.setItem('scoresTable', JSON.stringify(newScoreList));
        dispatch(clearState());
    }

    return (
        <div className={'select_action_wrapper'}>
            <span className={'time'}>Your Time is {clockMin}:{clockSec}</span>
            <div className={'buttons_wrapper'}>
                <Button
                    className={'stop_game'}
                    variant="text"
                    onClick={() => setGameScore()}
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
