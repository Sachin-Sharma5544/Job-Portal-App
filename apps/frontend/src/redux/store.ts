import { configureStore, type Store, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware, { type SagaMiddleware } from "redux-saga";
import authReducer from "./slices/authSlice";
import trendingJobsReducer from "./slices/trendingJobsSlice";
import pageClickLocationReducer from "./slices/clickLocationSlice";
import { rootSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({
    auth: authReducer,
    trendingJobs: trendingJobsReducer,
    pageClickLocation: pageClickLocationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (): Store => {
    const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    });
    sagaMiddleware.run(rootSaga);

    return store;
};
