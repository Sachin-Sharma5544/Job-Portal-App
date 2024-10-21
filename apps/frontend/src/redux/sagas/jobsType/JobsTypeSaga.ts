import { takeLatest, call, put } from "redux-saga/effects";
import axios, { type AxiosResponse } from "axios";
import { PORT } from "@repo/constants";
import { type JobsType } from "@repo/datatypes";
import {
    fetchJobsTypeRequest,
    fetchJobsTypeSuccess,
    fetchJobsTypeFailure,
} from "../../slices/jobsSlice";

interface JobsArray {
    trendingJobs: JobsType[];
}

interface ResponseData extends AxiosResponse {
    data: JobsArray;
}

const fetchJobsTypeApi = async (): Promise<JobsType[]> => {
    const response: ResponseData = await axios.get<JobsArray>(
        `http://localhost:${PORT}/api/trending-jobs`
    );
    return response.data.trendingJobs;
};

function* jobsTypeSaga(): Generator {
    try {
        const trendingJobs = yield call(fetchJobsTypeApi); // Call the API
        yield put(fetchJobsTypeSuccess(trendingJobs)); // Dispatch success action
    } catch (error) {
        yield put(fetchJobsTypeFailure()); // Dispatch failure action
    }
}

export function* watchFetchJobsType(): Generator {
    yield takeLatest(fetchJobsTypeRequest, jobsTypeSaga);
}
