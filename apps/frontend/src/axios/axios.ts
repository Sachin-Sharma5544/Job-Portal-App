import axios from "axios";

const url = "http://localhost:5002";

const instance = axios.create({ baseURL: url });

export default instance;
