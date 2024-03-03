// actions/authActions.js
export const login = () => ({
    type: "LOGIN",
});

export const logout = (): { type: string } => ({
    type: "LOGOUT",
});

export const setUser = (user: any) => ({
    type: "SET_USER",
    payload: user,
});
