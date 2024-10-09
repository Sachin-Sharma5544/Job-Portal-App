import axios, { type AxiosInstance } from "axios";
import { API, AUTH, PORT } from "@repo/constants";

export const axiosAuthInstance = (): AxiosInstance => {
    const authUrl = `http://localhost:${PORT}${API}${AUTH}`;
    const axiosAuth = axios.create({
        baseURL: authUrl,
        headers: { accept: "application/json" },
    });
    return axiosAuth;
};

export const locationInstance = (queryLocation: string): AxiosInstance => {
    const locationUrl = `https://us1.locationiq.com/v1/autocomplete`;
    const axiosLocation = axios.create({
        baseURL: locationUrl,
        headers: { accept: "application/json" },
        params: {
            q: queryLocation,
            countrycodes: "in",
            tag: "place:city",
            key: "pk.840ec05a9928bfaf432fde14f71fdf7f",
        },
    });

    return axiosLocation;
};
