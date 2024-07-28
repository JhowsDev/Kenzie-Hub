import axios from "axios";

export const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    setTimeout: 8000,
})