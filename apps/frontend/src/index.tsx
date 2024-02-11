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
import Layout from "./layout/appLayout/AppLayout";
import SignInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App(): JSX.Element {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route element={<h1>Home Page</h1>} path={homePath} />
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
    );
}

export default App;
