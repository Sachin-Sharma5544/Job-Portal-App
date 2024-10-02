import { all, fork } from "redux-saga/effects";
import { watchFetchTrendingJobs } from "./trendingJobs/trendingJobsSaga";

export function* rootSaga() {
    yield all([fork(watchFetchTrendingJobs)]);
}
