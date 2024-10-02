import { createSlice } from "@reduxjs/toolkit";

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
