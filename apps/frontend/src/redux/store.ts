import { configureStore, type Store, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import trendingJobsReducer from "./slices/trendingJobsSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    trendingJobs: trendingJobsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (): Store => {
    const store = configureStore({
        reducer: rootReducer,
    });

    return store;
};
