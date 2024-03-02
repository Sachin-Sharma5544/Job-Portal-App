// reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    // token: null,
    // user: null,
};

export const authReducer = (action: any, state = initialState): any => {
    switch (action?.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                // token: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                // token: null,
                // user: null,
            };
        case "SET_USER":
            return {
                ...state,
                // user: action.payload,
            };
        default:
            return state;
    }
};
