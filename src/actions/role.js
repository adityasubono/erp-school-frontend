import {
    RETRIEVE_ROLES, ROLES_FAIL, SET_MESSAGE,
} from "./types";

import RoleServices from "../services/role.services";;

export const retrieveRoles = () => async (dispatch) => {
    // return RoleServices.getAllRole().then(
    //     (data) => {
    //         dispatch({
    //             type: RETRIEVE_ROLES,
    //             payload: { roles: data },
    //         });
    //
    //         return Promise.resolve();
    //     },
    //     (error) => {
    //         const message =
    //             (error.response &&
    //                 error.response.data &&
    //                 error.response.data.message) ||
    //             error.message ||
    //             error.toString();
    //
    //         dispatch({
    //             type: ROLES_FAIL,
    //         });
    //
    //         dispatch({
    //             type: SET_MESSAGE,
    //             payload: message,
    //         });
    //
    //         return Promise.reject();
    //     }
    // );

    try {
        const res = await RoleServices.getAllRole();

        dispatch({
            type: RETRIEVE_ROLES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
