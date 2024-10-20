import { configureStore, type Store, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware, { type SagaMiddleware } from "redux-saga";
import authReducer from "./slices/authSlice";
import jobsTypeReducer from "./slices/jobsSlice";
import userActionReducer from "./slices/userActionSlice";
import { rootSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsTypeReducer,
    userAction: userActionReducer,
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
