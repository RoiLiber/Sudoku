import * as actionTypes from "../actions/actionTypes";

const initialState = {
    setNewGameLevel: false,
    newGameData: '',
    loader: false
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
        default:
            return state;
    }
};

export default mainReducer;
