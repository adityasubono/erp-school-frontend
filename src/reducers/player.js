import {
    CREATE_DATA_FOOTBALL_PLAYER_SUCCESS,
    CREATE_DATA_FOOTBALL_PLAYER_FAIL
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case CREATE_DATA_FOOTBALL_PLAYER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case CREATE_DATA_FOOTBALL_PLAYER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}
