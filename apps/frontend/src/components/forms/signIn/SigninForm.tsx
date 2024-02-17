import React from "react";
import { JOB_SEEKERS, LOGIN_BUTTON_TEXT } from "@repo/constants";
import { AuthForm } from "@repo/ui";

const SigninForm = (): JSX.Element => {
    const handleLoginClick = async (
        email: string,
        password: string
    ): Promise<void> => {
        console.log(email, password, "Login Component");
    };
    return (
        <AuthForm
            buttonText={LOGIN_BUTTON_TEXT}
            isSignup={false}
            onButtonClick={handleLoginClick}
            roleType={JOB_SEEKERS}
        />
    );
};

export default SigninForm;
