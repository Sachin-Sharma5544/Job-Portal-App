import { takeLatest, call, put } from "redux-saga/effects";
import axios, { type AxiosResponse } from "axios";
import {
    fetchTrendingJobsRequest,
    fetchTrendingJobsSuccess,
    fetchTrendingJobsFailure,
} from "../../slices/trendingJobsSlice";

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
        "http://localhost:5002/api/trending-jobs"
    );

    return response.data.trendingJobs;
};

function* trendingJobsSaga(): Generator {
    try {
        const trendingJobs = yield call(fetchTrendingJobsApi); // Call the API
        yield put(fetchTrendingJobsSuccess(trendingJobs)); // Dispatch success action
    } catch (error) {
        yield put(fetchTrendingJobsFailure()); // Dispatch failure action
    }
}

export function* watchFetchTrendingJobs(): Generator {
    yield takeLatest(fetchTrendingJobsRequest.type, trendingJobsSaga);
}
