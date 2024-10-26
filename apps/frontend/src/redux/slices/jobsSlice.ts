import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type JobsType, type Jobs } from "@repo/datatypes";

// This needs to be updated as per the data of jobs as its structure to be changed
interface JobsSliceType {
    jobsType: JobsType[];
    jobs: Jobs[];
}

const initialState: JobsSliceType = {
    jobsType: [],
    jobs: [],
};

export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        fetchJobsTypeRequest: (state) => {
            return state;
        },
        fetchJobsTypeSuccess: (state, action: PayloadAction<JobsType[]>) => {
            state.jobsType = action.payload;
        },
        fetchJobsTypeFailure: (state) => {
            state.jobsType = [];
        },
        fetchJobsRequest: (state, action) => {},
        fetchJobsByCompanyIdRequest: (state, action) => {},
        fetchJobsSuccess: (state, action: PayloadAction<Jobs[]>) => {
            state.jobs = action.payload;
        },
        fetchJobsFailure: (state) => {
            state.jobs = [];
        },
    },
});

export const {
    fetchJobsTypeRequest,
    fetchJobsTypeSuccess,
    fetchJobsTypeFailure,
    fetchJobsRequest,
    fetchJobsSuccess,
    fetchJobsFailure,
    fetchJobsByCompanyIdRequest,
} = jobsSlice.actions;
export default jobsSlice.reducer;
