import React from 'react';
import './style.scss';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {setNewGameLevel, setNewGame} from "../../store/actions/mainActions";

export default function PopUp(props) {
    const { title } = props;
    const dispatch = useDispatch();

    function setLevel(level) {
        dispatch(setNewGameLevel(level))
        dispatch(setNewGame(false))
    }

    return (
        <div className={'popup'}>
            <span>{title}</span>
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
    )
}
