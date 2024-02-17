import React, { useState } from "react";
import { WORK, WISE } from "@repo/constants";
import axios from "axios";
import { type UserType } from "@repo/datatypes";
import SignupForm from "../components/forms/signUp/SignupForm";

const SignUpPage = (): JSX.Element => {
    return <SignupForm />;
};

export default SignUpPage;
