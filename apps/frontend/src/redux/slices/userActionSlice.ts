import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Company } from "@repo/datatypes";

interface UserActionState {
    clickLocation: string | null;
    selectedCompany: Company | null;
}

const initialState: UserActionState = {
    clickLocation: null,
    selectedCompany: null,
};

const userActionSlice = createSlice({
    name: "userAction",
    initialState,
    reducers: {
        pageClickLocation: (state, action: PayloadAction<string>) => {
            state.clickLocation = action.payload;
        },
        setSelectedCompany: (state, action: PayloadAction<Company | null>) => {
            state.selectedCompany = action.payload;
        },
    },
});

export default userActionSlice.reducer;
export const { pageClickLocation, setSelectedCompany } =
    userActionSlice.actions;
