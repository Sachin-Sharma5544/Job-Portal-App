import React from "react";
import { LinkReactRouter, Button, TextField } from "@repo/ui";
import { loginPath } from "@repo/constants";

interface SignInPageProps {
    email: string;
    password: string;
    confirmPassword: string;
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SignupForm = (props: SignInPageProps): JSX.Element => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
                <TextField
                    changeHandler={props.handleEmail}
                    inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    inputBoxId="email"
                    inputType="email"
                    inputValue={props.email}
                    label="Email Address"
                    labelClass="block text-sm font-medium leading-6 text-gray-900"
                    labelHtmlFor="email"
                />

                <TextField
                    changeHandler={props.handlePassword}
                    inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    inputBoxId="password"
                    inputType="password"
                    inputValue={props.password}
                    label="Password"
                    labelClass="block text-sm font-medium leading-6 text-gray-900"
                    labelHtmlFor="password"
                />

                <TextField
                    changeHandler={props.handleConfirmPassword}
                    inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    inputBoxId="cnf-password"
                    inputType="password"
                    inputValue={props.confirmPassword}
                    label="Confirm Password"
                    labelClass="block text-sm font-medium leading-6 text-gray-900"
                    labelHtmlFor="cnf-password"
                />
                <Button
                    className="flex bg-indigo-500 hover:bg-indigo-600 rounded-md text-white w-full py-1.5 px-3 justify-center font-semibold leading-6 text-sm"
                    onClick={() => {}}
                >
                    Register
                </Button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Already a menber?{" "}
                <LinkReactRouter
                    className="font-semibold text-indigo-500 hover:text-indigo-600"
                    to={loginPath}
                >
                    Login
                </LinkReactRouter>
            </p>
        </div>
    );
};

export default SignupForm;
