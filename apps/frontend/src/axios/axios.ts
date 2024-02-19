import axios from "axios";
import { API, AUTH } from "@repo/constants";

const authUrl = `http://localhost:5002${API}${AUTH}`;
export const axiosAuthInstance = axios.create({ baseURL: authUrl });
