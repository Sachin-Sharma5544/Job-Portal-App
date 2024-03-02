import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import {
    homePath,
    companyPath,
    salaryPath,
    loginPath,
    signupPath,
} from "@repo/constants";
import AuthProvider from "react-auth-kit/AuthProvider";
import Layout from "./layout/appLayout/AppLayout";
import { HomePage, SignInPage, SignUpPage } from "./pages";
import { store } from "./auth";

function App(): JSX.Element {
    return (
        <AuthProvider store={store}>
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
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;
