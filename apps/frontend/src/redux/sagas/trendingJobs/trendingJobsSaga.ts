import { takeLatest, call, put } from "redux-saga/effects";
import axios, { type AxiosResponse } from "axios";
import { PORT } from "@repo/constants";
import {
    fetchJobsTypeRequest,
    fetchJobsTypeSuccess,
    fetchJobsTypeFailure,
} from "../../slices/jobsSlice";

interface TrendingJob {
    _id: string;
    jobName: string;
}

interface TrendingJobs {
    trendingJobs: TrendingJob[];
}

interface ResponseData extends AxiosResponse {
    data: TrendingJobs;
}

const fetchTrendingJobsApi = async (): Promise<TrendingJob[]> => {
    const response: ResponseData = await axios.get<TrendingJobs>(
        `http://localhost:${PORT}/api/trending-jobs`
    );
    return response.data.trendingJobs;
};

function* trendingJobsSaga(): Generator {
    try {
        const trendingJobs = yield call(fetchTrendingJobsApi); // Call the API
        yield put(fetchJobsTypeSuccess(trendingJobs)); // Dispatch success action
    } catch (error) {
        yield put(fetchJobsTypeFailure()); // Dispatch failure action
    }
}

export function* watchFetchTrendingJobs(): Generator {
    yield takeLatest(fetchJobsTypeRequest, trendingJobsSaga);
}
