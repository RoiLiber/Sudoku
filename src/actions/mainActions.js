import * as actionTypes from "./actionTypes";
import { cors, url } from '../consts';

export const newGamePopUp = boll => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.NEW_GAME_POP_UP,
            payload: boll
        })
    }
};

export const setNewGameRequest = level => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_LOADER,
                payload: true
        });
        fetch(`${cors}${url}new/?${9}&${level}`)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    return dispatch({
                        type: actionTypes.SET_NEW_GAME_REQUEST,
                        payload: data
                    })
                }, 3000)
            })
            .catch((err) => {
                console.log(err);
            });
    }
};




