import React from "react";
import { HeaderElement, ParaElement } from "@repo/ui";
import { HOME_HEADING_TEXT, HOME_JOB_EXPLORE_TEXT } from "@repo/constants";

export const AutoCompleteComponent = (): JSX.Element => {
    return (
        <div className="w-full pb-20 border-2">
            <ParaElement className="text-center font-bold">
                This area is reserved for Autocomplete field implementation
            </ParaElement>
        </div>
    );
};
