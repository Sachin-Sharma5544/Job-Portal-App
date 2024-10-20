import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// This needs to be updated as per the data of jobs as its structure to be changed
interface Jobs {
    jobsType: [];
    jobs: [];
}

const initialState: Jobs = {
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
        fetchJobsTypeSuccess: (state, action: PayloadAction<[]>) => {
            state.jobsType = action.payload;
        },
        fetchJobsTypeFailure: (state) => {
            state.jobsType = [];
        },
    },
});

export const {
    fetchJobsTypeRequest,
    fetchJobsTypeSuccess,
    fetchJobsTypeFailure,
} = jobsSlice.actions;
export default jobsSlice.reducer;
