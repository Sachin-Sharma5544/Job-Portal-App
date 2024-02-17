import React from "react";
import {
    JOB_SEEKERS,
    CREATE_ACCOUNT,
    REGISTER_BUTTON_TEXT,
    LOGIN_LINK_TEXT,
    REGISTER_LINK_TEXT,
    signupPath,
    LOGIN_ACCOUNT,
    LOGIN_BUTTON_TEXT,
} from "@repo/constants";
import { LinkReactRouter, Button, TextField, AuthForm } from "@repo/ui";

const SigninForm = () => {
    const handleLoginClick = async (
        email: string,
        password: string
    ): Promise<void> => {
        console.log(email, password, "Login Component");

    };
    return (
        <AuthForm
            buttonText={LOGIN_BUTTON_TEXT}
            formHeader={LOGIN_ACCOUNT}
            isSignup={false}
            onButtonClick={handleLoginClick}
            redirectLink={signupPath}
            redirectLinkText={REGISTER_LINK_TEXT}
            roleType={JOB_SEEKERS}
        />
    );
};

export default SigninForm;
