import { createSlice } from "@reduxjs/toolkit";
import { TRENDING_JOBS } from "@repo/constants";

const initialState = {
    jobs: [
        { id: 1, jobName: TRENDING_JOBS.MNC },
        { id: 2, jobName: TRENDING_JOBS.REMOTE },
        { id: 3, jobName: TRENDING_JOBS.FRESHER },
        { id: 4, jobName: TRENDING_JOBS.DATA_SCIENCE },
        { id: 5, jobName: TRENDING_JOBS.HR },
        { id: 6, jobName: TRENDING_JOBS.ANALYTICS },
        { id: 7, jobName: TRENDING_JOBS.IT },
        { id: 8, jobName: TRENDING_JOBS.MARKETING },
        { id: 9, jobName: TRENDING_JOBS.STARTUP },
        { id: 10, jobName: TRENDING_JOBS.SUPPLY_CHAIN },
        { id: 11, jobName: TRENDING_JOBS.HEALTHCARE },
    ],
};

export const trendingJobsSlice = createSlice({
    name: "trendingJobs",
    initialState,
    reducers: {},
});

// export const {} = trendingJobsSlice.actions;
export default trendingJobsSlice.reducer;
