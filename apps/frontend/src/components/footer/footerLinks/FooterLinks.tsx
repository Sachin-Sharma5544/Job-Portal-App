import React from "react";
import { LinkReactRouter } from "@repo/ui";
import {
    aboutUsPath,
    careersPath,
    employersHomePath,
    fraudAlertPath,
    privacyPolicyPath,
    reportIssuePath,
    termsPath,
    trustAndSafetyPath,
} from "@repo/constants";

export function FooterLinks(): JSX.Element {
    return (
        <div className="w-full">
            <div className="flex justify-around w-full">
                <LinkReactRouter className="" to={aboutUsPath}>
                    About Us
                </LinkReactRouter>
                <LinkReactRouter className="" to={careersPath}>
                    Careers
                </LinkReactRouter>
                <LinkReactRouter className="" to={employersHomePath}>
                    Employers Home
                </LinkReactRouter>
                <LinkReactRouter className="" to={fraudAlertPath}>
                    Fraud Alert
                </LinkReactRouter>
            </div>
            <div className=" flex justify-around pt-5">
                <LinkReactRouter className=" " to={privacyPolicyPath}>
                    Privacy Policy
                </LinkReactRouter>
                <LinkReactRouter className=" " to={reportIssuePath}>
                    Report an Issue
                </LinkReactRouter>
                <LinkReactRouter className=" " to={termsPath}>
                    Terms and Conditions
                </LinkReactRouter>
                <LinkReactRouter className=" " to={trustAndSafetyPath}>
                    Trust and Safety
                </LinkReactRouter>
            </div>
        </div>
    );
}
