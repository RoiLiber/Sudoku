import React, {Fragment, useEffect, useState} from 'react';
import './style.scss';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { setNewGame } from '../../store/actions/mainActions'
import PopUp from "../PopUp";

export default function Home() {
    const [Game, setGame] = useState('');
    const dispatch = useDispatch();
    const isNewGame = useSelector(state => state.mainReducer.isNewGame);
    const newGameData = useSelector(state => state.mainReducer.newGameData);

    useEffect(() => {
        setGame(newGameData)
        console.log(newGameData)
    }, [newGameData])

    return (
        <div className={'home'}>
            <span>Sudoku Game</span>
            {
                newGameData
                ? <div>the game</div>
                    : <Fragment>
                        <Button
                            className={'selected'}
                            variant="text"
                            onClick={() => dispatch(setNewGame(true))}
                        >
                            Start a new game
                        </Button>
                        {isNewGame && <PopUp title={'Select Level:'}/>}
                    </Fragment>
            }
        </div>
    )
}
