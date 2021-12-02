import {
    RETRIEVE_ROLES, ROLES_FAIL,
} from "../actions/types";

const initialState = [];

const roleReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {

        case RETRIEVE_ROLES:
            return payload;

        case ROLES_FAIL:
            return {
                ...state,
                roles: null,
            };

        default:
            return state;
    }
};

export default roleReducer;
