import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/player/";

const createFootballPlayer = () => {
    return axios
        .post(API_URL + "create", {
            firstName,
            lastName,
            placeBirth,
            dateBirth,
            nationality,
            weight,
            number,
            position,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const getFootballPlayerAll = () => {
    return axios.get(API_URL + "all");
};

const getFootballPlayerById = (id) => {
    return axios.get(API_URL + id, { headers: authHeader() });
};

const updateFootballPlayerById = (id) => {
    return axios.put(API_URL + id, { headers: authHeader() });
};

const deleteFootballPlayerById = (id) => {
    return axios.delete(API_URL + id, { headers: authHeader() });
};

export default {
    createFootballPlayer,
    getFootballPlayerAll,
    getFootballPlayerById,
    updateFootballPlayerById,
    deleteFootballPlayerById,
};
