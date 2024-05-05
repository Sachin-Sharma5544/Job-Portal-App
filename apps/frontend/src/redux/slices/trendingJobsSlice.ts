import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [
        { id: 1, jobName: "MNC" },
        { id: 2, jobName: "Remote" },
        { id: 3, jobName: "Fresher" },
        { id: 4, jobName: "Data Science" },
        { id: 5, jobName: "Human Resources" },
        { id: 6, jobName: "Analytics" },
        { id: 7, jobName: "Software & IT" },
        { id: 8, jobName: "Marketing" },
        { id: 9, jobName: "Startup" },
        { id: 10, jobName: "Freshers" },
        { id: 11, jobName: "Health Care" },
    ],
};

export const trendingJobsSlice = createSlice({
    name: "trendingJobs",
    initialState,
    reducers: {},
});

// export const {} = trendingJobsSlice.actions;
export default trendingJobsSlice.reducer;
