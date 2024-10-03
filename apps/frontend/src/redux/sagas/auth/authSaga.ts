import { takeLatest, call, put } from "redux-saga/effects";
import { type PayloadAction } from "@reduxjs/toolkit";
import { loginPath } from "@repo/constants";
import { type AxiosResponse } from "axios";
import {
    loginFailure,
    loginRequest,
    loginSuccess,
} from "../../slices/authSlice";
import { axiosAuthInstance } from "../../../axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

interface LoginPayload {
    email: string;
    password: string;
}

interface ResponseData extends AxiosResponse {
    data: LoginPayload;
}

const callAuthApi = async (
    email: string,
    password: string
): Promise<LoginPayload> => {
    const response: ResponseData = await axiosAuthInstance.post(loginPath, {
        email,
        password,
    });

    return response.data;
};

function* authSaga(action: PayloadAction<LoginPayload>): Generator {
    const { email, password } = action.payload;

    try {
        const auth = yield call(callAuthApi, email, password);
        yield put(loginSuccess(auth)); // Dispatch success action
    } catch (error) {
        yield put(loginFailure()); // Dispatch failure action
    }
}

export function* watchAuth(): Generator {
    yield takeLatest(loginRequest.type, authSaga);
}
