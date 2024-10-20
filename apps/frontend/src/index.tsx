import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import {
    homePath,
    companyPath,
    salaryPath,
    loginPath,
    signupPath,
    profliePath,
    aboutUsPath,
    careersPath,
    employersHomePath,
    fraudAlertPath,
    privacyPolicyPath,
    reportIssuePath,
    termsPath,
    trustAndSafetyPath,
} from "@repo/constants";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./layout/appLayout/AppLayout";
import {
    HomePage,
    SignInPage,
    SignUpPage,
    ProfilePage,
    CompanyPage,
    SalaryPage,
    JobsPage,
} from "./pages";
import {
    AboutUs,
    Careers,
    EmployersHome,
    FraudAlert,
    PrivacyPolicy,
    ReportIssue,
    TermsAndConditions,
    TrustAndSafety,
} from "./components";
import { loginSuccess } from "./redux/slices/authSlice";
import { type RootState } from "./redux/store";

function App(): JSX.Element {
    const isAuthenticated = useIsAuthenticated();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );
    if (isAuthenticated()) {
        dispatch(loginSuccess());
    }

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<HomePage />} path={homePath} />
                    <Route element={<CompanyPage />} path={companyPath} />
                    <Route element={<SalaryPage />} path={salaryPath} />
                    <Route
                        element={
                            !isAuthenticated() ? (
                                <SignInPage />
                            ) : (
                                <ProfilePage />
                            )
                        }
                        path={loginPath}
                    />
                    <Route element={<SignUpPage />} path={signupPath} />
                    <Route
                        element={
                            isAuthenticated() ? (
                                <ProfilePage />
                            ) : (
                                <Navigate to={loginPath} />
                            )
                        }
                        path={profliePath}
                    />
                    <Route element={<AboutUs />} path={aboutUsPath} />
                    <Route element={<Careers />} path={careersPath} />
                    <Route
                        element={<EmployersHome />}
                        path={employersHomePath}
                    />
                    <Route element={<FraudAlert />} path={fraudAlertPath} />
                    <Route
                        element={<PrivacyPolicy />}
                        path={privacyPolicyPath}
                    />
                    <Route element={<ReportIssue />} path={reportIssuePath} />
                    <Route element={<TermsAndConditions />} path={termsPath} />
                    <Route
                        element={<TrustAndSafety />}
                        path={trustAndSafetyPath}
                    />
                    <Route element={<JobsPage />} path="/jobs/:job" />
                    <Route element={<JobsPage />} path="/company/:company" />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
