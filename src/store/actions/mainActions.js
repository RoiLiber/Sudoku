import * as actionTypes from "./actionTypes";

const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://www.cs.utep.edu/cheon/ws/sudoku/';

export const setNewGame = boll => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_NEW_GAME,
            payload: boll
        })
    }
};

export const setNewGameLevel = level => {
    return (dispatch) => {
        fetch(`${cors}${url}new/?${9}&${level}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('gameData', data);
                return (dispatch) => {
                    dispatch({
                        type: actionTypes.SET_NEW_GAME_LEVEL,
                        payload: data
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};




