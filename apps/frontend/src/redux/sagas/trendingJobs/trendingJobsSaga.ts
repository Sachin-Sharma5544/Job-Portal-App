import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
    fetchTrendingJobsRequest,
    fetchTrendingJobsSuccess,
    fetchTrendingJobsFailure,
} from "../../slices/trendingJobsSlice";

const fetchTrendingJobsApi = async () => {
    const response = await axios.get("http://localhost:5002/api/trending-jobs");
    return response.data.trendingJobs;
};

function* trendingJobsSaga() {
    try {
        const trendingJobs = yield call(fetchTrendingJobsApi); // Call the API
        console.log("Trennding Jobs", trendingJobs);
        yield put(fetchTrendingJobsSuccess(trendingJobs)); // Dispatch success action
    } catch (error) {
        yield put(fetchTrendingJobsFailure()); // Dispatch failure action
    }
}

export function* watchFetchTrendingJobs() {
    yield takeLatest(fetchTrendingJobsRequest.type, trendingJobsSaga);
}
