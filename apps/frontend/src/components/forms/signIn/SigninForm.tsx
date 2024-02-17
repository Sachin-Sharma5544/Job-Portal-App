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
            isSignup={false}
            onButtonClick={handleLoginClick}
            roleType={JOB_SEEKERS}
        />
    );
};

export default SigninForm;
