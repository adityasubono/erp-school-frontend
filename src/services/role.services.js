import axios from "axios";
const API_URL = "http://localhost:5000/api/roles/";


const getAllRole = () => {
    return axios.get(API_URL + "all");
};


export default {
    getAllRole
};
