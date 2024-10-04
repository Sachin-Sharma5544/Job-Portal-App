import { all, fork } from "redux-saga/effects";
import { watchFetchTrendingJobs } from "./trendingJobs/trendingJobsSaga";

export function* rootSaga(): Generator {
    yield all([fork(watchFetchTrendingJobs)]);
}
