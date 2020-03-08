import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clearState, newGamePopUp, isGameDone } from "../../actions/mainActions";
import './style.scss';

export default function SetWinPopUp() {
    const dispatch = useDispatch();

    function playAgain() {
        dispatch(newGamePopUp(true));
        dispatch(isGameDone(false));
    }

    return (
        <div className={'select_action_wrapper'}>
            <span className={'time'}>Your Time is 00:00</span>
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
