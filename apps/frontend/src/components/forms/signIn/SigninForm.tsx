import React from "react";
import {
    JOB_SEEKERS,
    LOGIN_BUTTON_TEXT,
    homePath,
    loginPath,
} from "@repo/constants";
import { AuthForm } from "@repo/ui";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { axiosAuthInstance } from "../../../axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux";

export function SigninForm(): JSX.Element {
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    // const [confirmPassword, setConfirmPassword] = useState<string>("");
    // const [isSignup, setIsSignUp] = useState<boolean>(false);
    // return (
    //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //             <div className="flex items-center justify-center">
    //                 <div className="text-white mx-2 text-[24px]">
    //                     <span className="text-orange-300">{WORK}</span>
    //                     <span className="text-sky-400 ">{WISE}</span>
    //                 </div>
    //                 <div className="h-6">
    //                     <svg
    //                         className="h-full"
    //                         fill="black"
    //                         viewBox="0 0 16 16"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                         <path
    //                             clipRule="evenodd"
    //                             d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    //                             fillRule="evenodd"
    //                         />
    //                         <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
    //                     </svg>
    //                 </div>
    //             </div>
    //             <p className="text-center">Job Seekers</p>
    //             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //                 {LOGIN_ACCOUNT}
    //             </h2>
    //         </div>
    //         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //             <form className="space-y-6">
    //                 {/* Email Field */}
    //                 <TextField
    //                     changeHandler={(
    //                         e: React.ChangeEvent<HTMLInputElement>
    //                     ) => {
    //                         setEmail(e.target.value);
    //                     }}
    //                     inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                     inputBoxId="email"
    //                     inputType="email"
    //                     inputValue={email}
    //                     label="Email Address"
    //                     labelClass="block text-sm font-medium leading-6 text-gray-900"
    //                     labelHtmlFor="email"
    //                 />
    //                 {/* Password Field */}
    //                 <TextField
    //                     changeHandler={(
    //                         e: React.ChangeEvent<HTMLInputElement>
    //                     ) => {
    //                         setPassword(e.target.value);
    //                     }}
    //                     inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                     inputBoxId="password"
    //                     inputType="password"
    //                     inputValue={password}
    //                     label="Password"
    //                     labelClass="block text-sm font-medium leading-6 text-gray-900"
    //                     labelHtmlFor="password"
    //                 />
    //                 {/* Confirm Password Field */}
    //                 {isSignup ? (
    //                     <TextField
    //                         changeHandler={(
    //                             e: React.ChangeEvent<HTMLInputElement>
    //                         ) => {
    //                             setConfirmPassword(e.target.value);
    //                         }}
    //                         inputBoxClass="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                         inputBoxId="cnf-password"
    //                         inputType="password"
    //                         inputValue={confirmPassword}
    //                         label="Confirm Password"
    //                         labelClass="block text-sm font-medium leading-6 text-gray-900"
    //                         labelHtmlFor="cnf-password"
    //                     />
    //                 ) : null}
    //                 <Button
    //                     className="flex bg-indigo-500 hover:bg-indigo-600 rounded-md text-white w-full py-1.5 px-3 justify-center font-semibold leading-6 text-sm"
    //                     onClick={() => {
    //                         console.log(email, password, confirmPassword);
    //                     }}
    //                 >
    //                     Login
    //                 </Button>
    //             </form>
    //             <p className="mt-10 text-center text-sm text-gray-500">
    //                 {isSignup ? ALREADY_MEMBER : NOT_MEMBER}{" "}
    //                 <LinkReactRouter
    //                     className="font-semibold text-indigo-500 hover:text-indigo-600"
    //                     to={isSignup ? loginPath : signupPath}
    //                 >
    //                     {isSignup ? LOGIN_LINK_TEXT : REGISTER_LINK_TEXT}
    //                 </LinkReactRouter>
    //             </p>
    //         </div>
    //     </div>
    // );

    const signIn = useSignIn();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLoginClick = async (
        email: string,
        password: string
    ): Promise<void> => {
        try {
            const response = await axiosAuthInstance.post(loginPath, {
                email,
                password,
            });

            // signIn({
            //     auth: {
            //         token: response.data.token,
            //         type: "Bearer",
            //     },
            //     userState: { email: response.data.email },
            // });

            dispatch({ type: "Login" });

            // navigate(homePath);
        } catch (error: any) {
            console.log("error from backedn", error.response);
        }
    };

    return (
        <AuthForm
            buttonText={LOGIN_BUTTON_TEXT}
            isSignup={false}
            onButtonClick={handleLoginClick}
            roleType={JOB_SEEKERS}
        />
    );
}
