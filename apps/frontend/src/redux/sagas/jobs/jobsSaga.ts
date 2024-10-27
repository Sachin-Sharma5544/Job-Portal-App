import { takeLatest, call, put } from "redux-saga/effects";
import axios, { type AxiosResponse } from "axios";
import { type JobsType, type Jobs } from "@repo/datatypes";
import { REQUEST_BASE_URL, NAVIGATION_PATHS } from "@repo/constants";
import {
    fetchJobsRequest,
    fetchJobsByCompanyIdRequest,
    fetchJobsSuccess,
    fetchJobsFailure,
} from "../../slices/jobsSlice";

interface Action {
    type: string;
    payload: JobsType;
}

interface JobsArray {
    jobs: Jobs[];
}

interface ResponseData extends AxiosResponse {
    data: JobsArray;
}

interface JobsPayload {
    jobsType: string;
    companyId: string;
}

const fetchJobsApi = async (payload: JobsPayload): Promise<Jobs[]> => {
    const options = {
        params: {
            jobType: payload.jobsType,
            companyId: payload.companyId,
        },
    };

    const response: ResponseData = await axios.get(
        `${REQUEST_BASE_URL.url}${NAVIGATION_PATHS.jobs}`,
        options
    );

    return response.data.jobs;
};

function* jobsSaga(action: Action): Generator {
    try {
        const jobs = yield call(fetchJobsApi, action.payload);
        if (jobs && Array.isArray(jobs)) {
            yield put(fetchJobsSuccess(jobs));
        }
    } catch (error) {
        yield put(fetchJobsFailure());
    }
}

function* jobsByCompanyIdSaga(action: Action): Generator {
    try {
        const jobs = yield call(fetchJobsByCompanyIdApi, action.payload);
        yield put(fetchJobsSuccess(jobs));
    } catch (error) {
        yield put(fetchJobsFailure());
    }
}

export function* watchFetchJobs(): Generator {
    yield takeLatest(fetchJobsRequest, jobsSaga);
    yield takeLatest(fetchJobsByCompanyIdRequest, jobsByCompanyIdSaga);
}
