import React from "react";
import { AuthForm } from "@repo/ui";
import { JOB_SEEKERS, REGISTER_BUTTON_TEXT } from "@repo/constants";
// import axios from "axios";
import { axiosAuthInstance } from "../../../axios/axios";

const SignupForm = (): JSX.Element => {
    const handleRegisterClick = async (
        email: string,
        password: string,
        confirmPassword: string | undefined
    ): Promise<void> => {
        const data = await axiosAuthInstance.post("/signup", {
            email,
            password,
        });
        console.log(data);
    };
    return (
        <AuthForm
            buttonText={REGISTER_BUTTON_TEXT}
            isSignup
            onButtonClick={handleRegisterClick}
            roleType={JOB_SEEKERS}
        />
    );
    // return <div>Sign Up Form</div>;
};

export default SignupForm;
