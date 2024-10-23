import { takeLatest, call, put } from "redux-saga/effects";
import axios, { type AxiosResponse } from "axios";
import { type JobsType, type Jobs } from "@repo/datatypes";
import {
    fetchJobsRequest,
    fetchJobsSuccess,
    fetchJobsFailure,
} from "../../slices/jobsSlice";

interface Action {
    type: string;
    payload?: JobsType;
}

interface JobsArray {
    jobs: Jobs[];
}

interface ResponseData extends AxiosResponse {
    data: JobsArray;
}

const fetchJobsApi = async (selectedJobtype: JobsType): Promise<Jobs[]> => {
    const response: ResponseData = await axios.get(
        "http://localhost:5004/api/jobs/get-jobs",
        {
            params: {
                jobType: selectedJobtype.jobName,
            },
        }
    );

    return response.data.jobs;
};

function* jobsSaga(action: Action): Generator {
    try {
        const jobs = yield call(fetchJobsApi, action.payload);
        yield put(fetchJobsSuccess(jobs));
    } catch (error) {
        yield put(fetchJobsFailure());
    }
}

export function* watchFetchJobs(): Generator {
    yield takeLatest(fetchJobsRequest, jobsSaga);
}
