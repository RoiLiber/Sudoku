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

export const setTimerResult = time => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_TIMER_RESULT,
            payload: time
        })
    }
};

export const isGameDone = boll => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.IS_GAME_DONE,
            payload: boll
        })
    }
};

export const clearState = initialState => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CLEAR_STATE,
            payload: initialState
        })
    }
};

export const setNewGameRequest = level => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_LOADER,
                payload: true
        });
        fetch(`${cors}${url}new/?size=${9}&level=${level}`)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    return dispatch({
                        type: actionTypes.SET_NEW_GAME_REQUEST,
                        payload: data
                    })
                }, 2000)
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

// const removeFavoriteCity = (value) => {
//     const { favoriteCities } = store.getState()
//     const newFavList = favoriteCities.filter((city) => city.key !== value)
//     localStorage.setItem('favorites', JSON.stringify(newFavList))
//     return ({
//         type: types.updateFavorites,
//         favorites: newFavList,
//     })
// }




