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
                <LinkReactRouter className="text-slate-200" to={aboutUsPath}>
                    About Us
                </LinkReactRouter>
                <LinkReactRouter className="text-slate-200" to={careersPath}>
                    Careers
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={employersHomePath}
                >
                    Employers Home
                </LinkReactRouter>
                <LinkReactRouter className="text-slate-200" to={fraudAlertPath}>
                    Fraud Alert
                </LinkReactRouter>
            </div>
            <div className=" flex justify-around pt-4">
                <LinkReactRouter
                    className="text-slate-200"
                    to={privacyPolicyPath}
                >
                    Privacy Policy
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={reportIssuePath}
                >
                    Report an Issue
                </LinkReactRouter>
                <LinkReactRouter className="text-slate-200" to={termsPath}>
                    Terms and Conditions
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={trustAndSafetyPath}
                >
                    Trust and Safety
                </LinkReactRouter>
            </div>
        </div>
    );
}
