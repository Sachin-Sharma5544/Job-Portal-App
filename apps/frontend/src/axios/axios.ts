import axios from "axios";
import { API, AUTH, PORT } from "@repo/constants";

const authUrl = `http://localhost:${PORT}${API}${AUTH}`;
export const axiosAuthInstance = axios.create({ baseURL: authUrl });
