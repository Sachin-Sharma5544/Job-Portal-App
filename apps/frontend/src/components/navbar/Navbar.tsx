// import { CounterButton, Link, LinkReactRouter } from "@repo/ui";
import React from "react";
import { LinkReactRouter, BrandLogo } from "@repo/ui";
import {
    HOME,
    COMPANY,
    SALARY,
    LOGIN,
    homePath,
    companyPath,
    salaryPath,
    loginPath,
    employerPath,
    EMPLOYERS,
    SIGN_OUT,
    PROFILE,
    profliePath,
    SIGNUP,
    signupPath,
} from "@repo/constants";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useSelector, useDispatch } from "react-redux";
import NavbarLayout from "../../layout/navbarLayout/NavbarLayout";
import { logout, type RootState } from "../../redux";

export const Navbar = (): JSX.Element => {
    const signOut = useSignOut();
    const dispatch = useDispatch();

    const isAuth = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    const handleLogout = (): void => {
        signOut();
        dispatch(logout());
    };

    return (
        <NavbarLayout>
            <div className="h-full m-0 p-0 flex items-center justify-between">
                <div className="h-full flex text-xs">
                    <div className="flex">
                        <LinkReactRouter className="flex" to={homePath}>
                            <BrandLogo bagFill="white" />
                        </LinkReactRouter>
                    </div>
                    <div className="flex px-5 text-[14px]">
                        <div className="text-white">
                            <LinkReactRouter className="" to={homePath}>
                                {HOME}
                            </LinkReactRouter>
                        </div>
                        <div className="text-white">
                            <LinkReactRouter className="pl-4" to={companyPath}>
                                {COMPANY}
                            </LinkReactRouter>
                        </div>
                        <div className="text-white">
                            <LinkReactRouter className="pl-4" to={salaryPath}>
                                {SALARY}
                            </LinkReactRouter>
                        </div>
                        <div className="text-white">
                            {isAuth ? (
                                <LinkReactRouter
                                    className="pl-4"
                                    to={profliePath}
                                >
                                    {PROFILE}
                                </LinkReactRouter>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="h-full flex text-xs">
                    <div className="flex text-[14px]">
                        {!isAuth ? (
                            <div className="text-white">
                                <LinkReactRouter className="" to={loginPath}>
                                    {LOGIN}
                                </LinkReactRouter>
                            </div>
                        ) : null}

                        {!isAuth ? (
                            <div className="text-white">
                                <LinkReactRouter
                                    className="pl-4"
                                    to={signupPath}
                                >
                                    {SIGNUP}
                                </LinkReactRouter>
                            </div>
                        ) : null}
                        {!isAuth ? (
                            <div className="text-white">
                                <LinkReactRouter
                                    className="pl-4"
                                    to={employerPath}
                                >
                                    {EMPLOYERS}
                                </LinkReactRouter>
                            </div>
                        ) : null}
                        {isAuth ? (
                            <div className="text-white">
                                <LinkReactRouter
                                    className=""
                                    onClick={() => {
                                        handleLogout();
                                    }}
                                    to="#"
                                >
                                    {SIGN_OUT}
                                </LinkReactRouter>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </NavbarLayout>
    );
};
