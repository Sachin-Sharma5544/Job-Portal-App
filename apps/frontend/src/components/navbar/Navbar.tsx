// import { CounterButton, Link, LinkReactRouter } from "@repo/ui";
import React from "react";
import { LinkReactRouter } from "@repo/ui";
import {
    HOME,
    WORK,
    WISE,
    COMPANY,
    SALARY,
    homePath,
    companyPath,
    salaryPath,
    loginPath,
    employerPath,
} from "@repo/constants";
import NavbarLayout from "../../layout/navbarLayout/NavbarLayout";

const Navbar = (): JSX.Element => {
    return (
        <NavbarLayout>
            <div className="h-full m-0 p-0 flex items-center justify-between">
                <div className="h-full flex text-xs">
                    <div className="flex">
                        <LinkReactRouter className="flex" to={homePath}>
                            <div className="text-white">
                                <span className="text-orange-200">{WORK}</span>
                                <span className="text-sky-200">{WISE}</span>
                            </div>

                            <div className="h-4">
                                <svg
                                    className="h-full"
                                    fill="white"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                                        fillRule="evenodd"
                                    />
                                    <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
                                </svg>
                            </div>
                        </LinkReactRouter>
                    </div>
                    <div className="flex px-5 text-[8px]">
                        <div className="text-white">
                            <LinkReactRouter className="" to={homePath}>
                                {HOME}
                            </LinkReactRouter>
                        </div>
                        <div className="text-white">
                            <LinkReactRouter className="pl-2" to={companyPath}>
                                {COMPANY}
                            </LinkReactRouter>
                        </div>
                        <div className="text-white">
                            <LinkReactRouter className="pl-2" to={salaryPath}>
                                {SALARY}
                            </LinkReactRouter>
                        </div>
                    </div>
                </div>

                <div className="h-full flex text-xs">
                    <div className="flex text-[8px]">
                        <div className="text-white">
                            <LinkReactRouter className="" to={loginPath}>
                                Login
                            </LinkReactRouter>
                        </div>
                        <div className="text-white">
                            <LinkReactRouter className="pl-2" to={employerPath}>
                                Employers/Post Job
                            </LinkReactRouter>
                        </div>
                    </div>
                </div>
            </div>
        </NavbarLayout>
    );
};

export default Navbar;
