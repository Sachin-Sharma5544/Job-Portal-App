import React, { useState } from "react";
import { LinkReactRouter, Button, TextField } from "@repo/ui";
import { loginPath } from "@repo/constants";
import axios from "axios";
import { type UserType } from "@repo/datatypes";

const SignupForm = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleRegisterClick = async (): Promise<void> => {
        const data: UserType = { email, password };
        if (confirmPassword !== password) {
            return alert("Password and Confirm Password are not same");
        }

        try {
            const response = await axios.post(
                "http://localhost:5002/signup",
                data
            );
            console.log("Post response", response);
        } catch (error) {
            console.log("Post response", error);
        }
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
                {/* Email Field */}
                <TextField
                    changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                    changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                <TextField
                    changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                <Button
                    className="flex bg-indigo-500 hover:bg-indigo-600 rounded-md text-white w-full py-1.5 px-3 justify-center font-semibold leading-6 text-sm"
                    onClick={async () => {
                        await handleRegisterClick();
                    }}
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
