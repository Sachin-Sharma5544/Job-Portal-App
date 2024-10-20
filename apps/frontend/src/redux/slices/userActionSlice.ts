import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Company, type JobsType } from "@repo/datatypes";

interface UserActionState {
    clickLocation: string | null;
    selectedCompany: Company | null;
    selectedJobType: JobsType | null;
}

const initialState: UserActionState = {
    clickLocation: null,
    selectedCompany: null,
    selectedJobType: null,
};

const userActionSlice = createSlice({
    name: "userAction",
    initialState,
    reducers: {
        pageClickLocation: (state, action: PayloadAction<string | null>) => {
            state.clickLocation = action.payload;
        },
        setSelectedCompany: (state, action: PayloadAction<Company | null>) => {
            state.selectedCompany = action.payload;
        },
        setSelectedJobType: (state, action: PayloadAction<JobsType | null>) => {
            state.selectedJobType = action.payload;
        },
    },
});

export default userActionSlice.reducer;
export const { pageClickLocation, setSelectedCompany, setSelectedJobType } =
    userActionSlice.actions;
