import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import {
    homePath,
    companyPath,
    salaryPath,
    loginPath,
    signupPath,
    profliePath,
} from "@repo/constants";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./layout/appLayout/AppLayout";
import { HomePage, SignInPage, SignUpPage, ProfilePage } from "./pages";
import { RootState, login } from "./redux";

function App(): JSX.Element {
    const isAuthenticated = useIsAuthenticated();
    const dispatch = useDispatch();
    // const isLoggedIn = useSelector(
    //     (state: RootState) => state.auth.isAuthenticated
    // );
    if (isAuthenticated()) {
        dispatch(login());
    }

    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route element={<HomePage />} path={homePath} />
                        <Route
                            element={<h1>Company Page</h1>}
                            path={companyPath}
                        />
                        <Route
                            element={<h1>Salary Page</h1>}
                            path={salaryPath}
                        />
                        <Route element={<SignInPage />} path={loginPath} />
                        <Route element={<SignUpPage />} path={signupPath} />
                        <Route element={<ProfilePage />} path={profliePath} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
