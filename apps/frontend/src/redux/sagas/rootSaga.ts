import { all, fork } from "redux-saga/effects";
import { watchFetchTrendingJobs } from "./trendingJobs/trendingJobsSaga";
import { watchAuth } from "./auth/authSaga";

export function* rootSaga(): Generator {
    yield all([fork(watchFetchTrendingJobs), fork(watchAuth)]);
}
