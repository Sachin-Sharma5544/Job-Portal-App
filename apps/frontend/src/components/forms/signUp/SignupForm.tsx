import React from "react";
import { AuthForm } from "@repo/ui";
import { JOB_SEEKERS, REGISTER_BUTTON_TEXT } from "@repo/constants";
import axios from "axios";

const SignupForm = (): JSX.Element => {
    const handleRegisterClick = (
        email: string,
        password: string,
        confirmPassword: string | undefined
    ): void => {
        console.log(email, password, confirmPassword, " Sign up component");
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
