import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import { NAVIGATION_PATHS, FOOTER_PATHS } from "@repo/constants";
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
                    <Route
                        element={<HomePage />}
                        path={NAVIGATION_PATHS.home}
                    />
                    <Route
                        element={<CompanyPage />}
                        path={NAVIGATION_PATHS.company}
                    />
                    <Route
                        element={<SalaryPage />}
                        path={NAVIGATION_PATHS.salary}
                    />
                    <Route
                        element={
                            !isAuthenticated() ? (
                                <SignInPage />
                            ) : (
                                <ProfilePage />
                            )
                        }
                        path={NAVIGATION_PATHS.login}
                    />
                    <Route
                        element={<SignUpPage />}
                        path={NAVIGATION_PATHS.signup}
                    />
                    <Route
                        element={
                            isAuthenticated() ? (
                                <ProfilePage />
                            ) : (
                                <Navigate to={NAVIGATION_PATHS.login} />
                            )
                        }
                        path={NAVIGATION_PATHS.proflie}
                    />
                    <Route element={<AboutUs />} path={FOOTER_PATHS.aboutUs} />
                    <Route element={<Careers />} path={FOOTER_PATHS.careers} />
                    <Route
                        element={<EmployersHome />}
                        path={FOOTER_PATHS.employersHome}
                    />
                    <Route
                        element={<FraudAlert />}
                        path={FOOTER_PATHS.fraudAlert}
                    />
                    <Route
                        element={<PrivacyPolicy />}
                        path={FOOTER_PATHS.privacyPolicy}
                    />
                    <Route
                        element={<ReportIssue />}
                        path={FOOTER_PATHS.reportIssue}
                    />
                    <Route
                        element={<TermsAndConditions />}
                        path={FOOTER_PATHS.terms}
                    />
                    <Route
                        element={<TrustAndSafety />}
                        path={FOOTER_PATHS.trustAndSafety}
                    />
                    <Route element={<JobsPage />} path="/jobs/:job" />
                    <Route element={<JobsPage />} path="/company/:company" />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
