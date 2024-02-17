import React from "react";
import { AuthForm } from "@repo/ui";
import {
    loginPath,
    JOB_SEEKERS,
    CREATE_ACCOUNT,
    REGISTER_BUTTON_TEXT,
    LOGIN_LINK_TEXT,
} from "@repo/constants";
import axios from "axios";

const SignupForm = (): JSX.Element => {
    const handleRegisterClick = async (
        email: string,
        password: string,
        confirmPassword: string | undefined
    ): Promise<void> => {
        console.log(email, password, confirmPassword, " Sign up component");
    };

    return (
        <AuthForm
            buttonText={REGISTER_BUTTON_TEXT}
            formHeader={CREATE_ACCOUNT}
            isSignup
            onButtonClick={handleRegisterClick}
            redirectLink={loginPath}
            redirectLinkText={LOGIN_LINK_TEXT}
            roleType={JOB_SEEKERS}
        />
    );
};

export default SignupForm;
