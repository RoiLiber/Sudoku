import * as actionTypes from "../actions/actionTypes";

const initialState = {
    setNewGameLevel: false,
    gameDone: false,
    newGameData: '',
    loader: false,
    gameTime: ''
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW_GAME_POP_UP: {
            const setNewGameLevel = action.payload;

            return {
                ...state,
                setNewGameLevel
            };
        }
        case actionTypes.SET_NEW_GAME_REQUEST: {
            const newGameData = action.payload;

            return {
                ...state,
                newGameData,
                setNewGameLevel: false,
                loader: false
            };
        }
        case actionTypes.SET_LOADER: {
            const boll = action.payload;

            return {
                ...state,
                loader: boll
            };
        }
        case actionTypes.IS_GAME_DONE: {
            const gameDone = action.payload;

            return {
                ...state,
                gameDone
            };
        }
        case actionTypes.SET_TIMER_RESULT: {
            const gameTime = action.payload;
            return {
                ...state,
                gameTime
            };
        }
        case actionTypes.CLEAR_STATE: {
            return {
                initialState
            };
        }
        default:
            return state;
    }
};

export default mainReducer;
