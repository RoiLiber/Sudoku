import React from 'react';
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setNewGameRequest, newGamePopUp } from "../../actions/mainActions";
import './style.scss';

export default function SetLevelPopUp() {
    const dispatch = useDispatch();

    function setLevel(level) {
        dispatch(setNewGameRequest(level));
    }

    return (
        <div className={'select_level_wrapper'}>
            <i className="far fa-times-circle"
               onClick={() => dispatch(newGamePopUp(false))}
            />
            <div className={'buttons_wrapper'}>
                <Button
                    className={'selected'}
                    variant="text"
                    onClick={() => setLevel(1)}
                >
                    Easy
                </Button>
                <Button
                    className={'selected'}
                    variant="text"
                    onClick={() => setLevel(2)}
                >
                    Normal
                </Button>
                <Button
                    className={'selected'}
                    variant="text"
                    onClick={() => setLevel(3)}
                >
                    Hard
                </Button>
            </div>
        </div>
    )
}
