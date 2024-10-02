import { createSlice } from "@reduxjs/toolkit";
import { TRENDING_JOBS } from "@repo/constants";

const initialState = {
    jobs: [],
};

export const trendingJobsSlice = createSlice({
    name: "trendingJobs",
    initialState,
    reducers: {
        fetchTrendingJobsRequest: (state) => {
            return state;
        },
        fetchTrendingJobsSuccess: (state, action) => {
            state.jobs = action.payload;
        },
        fetchTrendingJobsFailure: (state) => {
            state.jobs = [];
        },
    },
});

export const {
    fetchTrendingJobsRequest,
    fetchTrendingJobsSuccess,
    fetchTrendingJobsFailure,
} = trendingJobsSlice.actions;
export default trendingJobsSlice.reducer;
