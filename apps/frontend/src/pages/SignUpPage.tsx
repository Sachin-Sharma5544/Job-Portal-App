import React, { useState } from "react";
import { WORK, WISE, loginPath } from "@repo/constants";
import { Button, LinkReactRouter } from "@repo/ui";
import axios from "axios";
import { type UserType } from "@repo/datatypes";
import SignupForm from "../components/forms/signUp/SignupForm";

const SignUpPage = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    // console.log("email", email);
    console.log("Password", password);
    // console.log("cnf passsword", confirmPassword);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex items-center justify-center">
                    <div className="text-white mx-2 text-[24px]">
                        <span className="text-orange-300">{WORK}</span>
                        <span className="text-sky-400 ">{WISE}</span>
                    </div>

                    <div className="h-6">
                        <svg
                            className="h-full"
                            fill="black"
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
                </div>
                <p className="text-center">Job Seekers</p>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create your Account
                </h2>
            </div>

            <SignupForm
                confirmPassword={confirmPassword}
                email={email}
                handleConfirmPassword={(e) => {
                    setPassword(e.target.value);
                }}
                handleEmail={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }}
                handlePassword={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setConfirmPassword(e.target.value);
                }}
                password={password}
            />
        </div>
    );
};

export default SignUpPage;
