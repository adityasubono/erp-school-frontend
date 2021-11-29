import {
    CREATE_DATA_FOOTBALL_PLAYER_FAIL,
    CREATE_DATA_FOOTBALL_PLAYER_SUCCESS,
    SET_MESSAGE
} from "./types";

import FootballPlayerService from "../services/player.service";

export const createFootballPlayer = (
    firstName,
    lastName,
    placeBirth,
    dateBirth,
    nationality,
    weight,
    number,
    position) => (dispatch) => {
    return FootballPlayerService.createFootballPlayer(
        firstName,
        lastName,
        placeBirth,
        dateBirth,
        nationality,
        weight,
        number,
        position
    ).then(
        (response) => {
            dispatch({
                type: CREATE_DATA_FOOTBALL_PLAYER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: CREATE_DATA_FOOTBALL_PLAYER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

