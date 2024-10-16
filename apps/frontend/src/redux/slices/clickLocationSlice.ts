import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ClickLocationState {
    clickLocation: string | null;
}

const initialState: ClickLocationState = {
    clickLocation: null,
};

const clickLocationSlice = createSlice({
    name: "pageClickLocation",
    initialState,
    reducers: {
        pageClickLocation: (state, action: PayloadAction<string>) => {
            state.clickLocation = action.payload;
        },
    },
});

export const { pageClickLocation } = clickLocationSlice.actions;
export default clickLocationSlice.reducer;
