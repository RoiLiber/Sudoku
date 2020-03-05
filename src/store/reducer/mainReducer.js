import * as actionTypes from "../actions/actionTypes";

const initialState = {
    isNewGame: false,
    newGameData: ''
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NEW_GAME: {
            const isNewGame = action.payload;

            return {
                ...state,
                isNewGame
            };
        }
        case actionTypes.SET_NEW_GAME_LEVEL: {
            const newGameData = action.payload;

            return {
                ...state,
                newGameData
            };
        }
        default:
            return state;
    }
};

export default mainReducer;
