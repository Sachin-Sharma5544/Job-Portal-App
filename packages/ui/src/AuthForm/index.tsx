import React, { useState } from "react";
import {
    WORK,
    WISE,
    ALREADY_MEMBER,
    NOT_MEMBER,
    CREATE_ACCOUNT,
    LOGIN_ACCOUNT,
    loginPath,
    signupPath,
    LOGIN_LINK_TEXT,
    REGISTER_LINK_TEXT,
} from "@repo/constants";
import { Button } from "../Button";
import { TextField } from "../InputWithLabelField";
import { LinkReactRouter } from "../LinkReactRouter";
import { BrandLogo } from "../BrandLogo";

interface AuthFormProps {
    onButtonClick: (a: string, b: string, c?: string) => void;
    isSignup: true | false;
    roleType: string;
    buttonText: string;
}

export function AuthForm(props: AuthFormProps): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex items-center justify-center">
                    <BrandLogo bagFill="black" />
                </div>
                <p className="text-center">{props.roleType}</p>

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {props.isSignup ? CREATE_ACCOUNT : LOGIN_ACCOUNT}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    {/* Email Field */}
                    <TextField
                        changeHandler={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setEmail(e.target.value);
                        }}
                        inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        inputBoxId="email"
                        inputType="email"
                        inputValue={email}
                        label="Email Address"
                        labelClass="block text-sm font-medium leading-6 text-gray-900"
                        labelHtmlFor="email"
                    />

                    {/* Password Field */}
                    <TextField
                        changeHandler={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setPassword(e.target.value);
                        }}
                        inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        inputBoxId="password"
                        inputType="password"
                        inputValue={password}
                        label="Password"
                        labelClass="block text-sm font-medium leading-6 text-gray-900"
                        labelHtmlFor="password"
                    />
                    {/* Confirm Password Field */}
                    {props.isSignup ? (
                        <TextField
                            changeHandler={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setConfirmPassword(e.target.value);
                            }}
                            inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            inputBoxId="cnf-password"
                            inputType="password"
                            inputValue={confirmPassword}
                            label="Confirm Password"
                            labelClass="block text-sm font-medium leading-6 text-gray-900"
                            labelHtmlFor="cnf-password"
                        />
                    ) : null}
                    <Button
                        className="flex bg-indigo-500 hover:bg-indigo-600 rounded-md text-white w-full py-1.5 px-3 justify-center font-semibold leading-6 text-sm"
                        onClick={() => {
                            props.onButtonClick(
                                email,
                                password,
                                confirmPassword
                            );
                        }}
                    >
                        {props.buttonText}
                    </Button>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    {props.isSignup ? ALREADY_MEMBER : NOT_MEMBER}{" "}
                    <LinkReactRouter
                        className="font-semibold text-indigo-500 hover:text-indigo-600"
                        to={props.isSignup ? loginPath : signupPath}
                    >
                        {props.isSignup ? LOGIN_LINK_TEXT : REGISTER_LINK_TEXT}
                    </LinkReactRouter>
                </p>
            </div>
        </div>
    );
}
