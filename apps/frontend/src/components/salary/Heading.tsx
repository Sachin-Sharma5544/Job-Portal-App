import React from "react";
import { HeaderElement, ParaElement } from "@repo/ui";
import { SALARY_HEADING_TEXT, SALARY_EXPLORE_TEXT } from "@repo/constants";

export const Heading = (): JSX.Element => {
    return (
        <div className="py-20 ">
            <HeaderElement className="text-center text-4xl font-bold">
                {SALARY_HEADING_TEXT}
            </HeaderElement>
            <ParaElement className="text-center py-3">
                {SALARY_EXPLORE_TEXT}
            </ParaElement>
        </div>
    );
};
