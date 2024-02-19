import axios from "axios";
import { API, AUTH } from "@repo/constants";

const url = `http://localhost:5002${API}${AUTH}`;

const instance = axios.create({ baseURL: url });

export default instance;
