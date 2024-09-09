import React from "react";
import { HeaderElement, ParaElement } from "@repo/ui";
import { HOME_HEADING_TEXT, HOME_JOB_EXPLORE_TEXT } from "@repo/constants";
import Home_Heading_IMG from "../../../assets/Home_Heading.jpg";

export const Heading = (): JSX.Element => {
    return (
        <div className="py-20 ">
            <HeaderElement className="text-center text-4xl font-bold">
                {HOME_HEADING_TEXT}
            </HeaderElement>
            <ParaElement className="text-center py-3">
                {HOME_JOB_EXPLORE_TEXT}
            </ParaElement>
        </div>
    );
};
