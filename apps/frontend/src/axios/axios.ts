import axios, { type AxiosInstance } from "axios";
import {
    NAVIGATION_PATHS,
    REQUEST_BASE_URL,
    LOCATION_BASE_URL,
} from "@repo/constants";

export const axiosAuthInstance = (): AxiosInstance => {
    const authUrl = `${REQUEST_BASE_URL.url}${NAVIGATION_PATHS.auth}`;
    const axiosAuth = axios.create({
        baseURL: authUrl,
        headers: { accept: "application/json" },
    });
    return axiosAuth;
};

export const axiosPublicInstance = (query: unknown): AxiosInstance => {
    const axiosPublic = axios.create({
        baseURL: REQUEST_BASE_URL.url,
        headers: { accept: "application/json" },
        params: {
            q: query,
        },
    });
    return axiosPublic;
};

export const locationInstance = (queryLocation: string): AxiosInstance => {
    const axiosLocation = axios.create({
        baseURL: LOCATION_BASE_URL.url,
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
