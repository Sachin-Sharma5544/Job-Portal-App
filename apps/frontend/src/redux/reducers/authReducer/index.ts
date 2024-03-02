const initialState = {
    isAuthenticated: false,
};

interface ActionType {
    type?: string;
    payload?: string;
}

export const authReducer = (
    state = initialState,
    action: ActionType
): typeof initialState => {
    switch (action.type) {
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
