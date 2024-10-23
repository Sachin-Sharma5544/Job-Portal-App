import { all, fork } from "redux-saga/effects";
import { watchFetchJobsType } from "./jobsType/JobsTypeSaga";
import { watchFetchJobs } from "./jobs/jobsSaga";

export function* rootSaga(): Generator {
    yield all([fork(watchFetchJobsType), fork(watchFetchJobs)]);
}
