import React from "react";
import { LinkReactRouter } from "@repo/ui";
import { FOOTER_PATHS } from "@repo/constants";

export function FooterLinks(): JSX.Element {
    return (
        <div className="w-full">
            <div className="flex justify-around w-full">
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.aboutUs}
                >
                    About Us
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.careers}
                >
                    Careers
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.employersHome}
                >
                    Employers Home
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.fraudAlert}
                >
                    Fraud Alert
                </LinkReactRouter>
            </div>
            <div className=" flex justify-around pt-4">
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.privacyPolicy}
                >
                    Privacy Policy
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.reportIssue}
                >
                    Report an Issue
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.terms}
                >
                    Terms and Conditions
                </LinkReactRouter>
                <LinkReactRouter
                    className="text-slate-200"
                    to={FOOTER_PATHS.trustAndSafety}
                >
                    Trust and Safety
                </LinkReactRouter>
            </div>
        </div>
    );
}
