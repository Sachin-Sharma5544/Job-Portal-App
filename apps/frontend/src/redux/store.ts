import { configureStore, type Store } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const setupStore = (): Store => {
    const store = configureStore({
        reducer: {
            auth: authReducer,
        },
    });

    return store;
};
