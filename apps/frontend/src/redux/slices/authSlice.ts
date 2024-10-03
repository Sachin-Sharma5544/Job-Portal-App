import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: "",
    email: "",
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state, action) => {
            state.isAuthenticated = false;
        },
        loginFailure: (state) => {
            state.isAuthenticated = false;
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action?.payload?.token;
            state.email = action?.payload?.email;
        },
        logoutSuccess: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logoutSuccess, loginRequest, loginFailure } =
    authSlice.actions;
export default authSlice.reducer;
