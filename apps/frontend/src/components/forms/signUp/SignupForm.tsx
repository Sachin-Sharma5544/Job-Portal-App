import React from "react";
import { Button } from "@repo/ui";
import { LinkReactRouter } from "@repo/ui";
import { loginPath } from "@repo/constants";
import { TextField } from "@repo/ui";

const SignupForm = () => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label
                            className="block text-sm font-medium leading-6 text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="password"
                            name="password"
                            required
                            type="password"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label
                            className="block text-sm font-medium leading-6 text-gray-900"
                            htmlFor="password"
                        >
                            Confirm Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="cnf-password"
                            name="cnf-password"
                            required
                            type="password"
                        />
                    </div>
                </div>

                <div>
                    <Button
                        className="flex bg-indigo-500 hover:bg-indigo-600 rounded-md text-white w-full py-1.5 px-3 justify-center font-semibold leading-6 text-sm"
                        onClick={() => {}}
                    >
                        Register
                    </Button>
                </div>
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
