import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// This needs to be updated as per the data of jobs as its structure to be changed
interface Jobs {
    jobs: [];
}

const initialState: Jobs = {
    jobs: [],
};

export const trendingJobsSlice = createSlice({
    name: "trendingJobs",
    initialState,
    reducers: {
        fetchTrendingJobsRequest: (state) => {
            return state;
        },
        fetchTrendingJobsSuccess: (state, action: PayloadAction<[]>) => {
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
