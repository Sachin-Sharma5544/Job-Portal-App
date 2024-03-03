import React from "react";
import { HeaderElement, ParaElement } from "@repo/ui";

export const Heading = (): JSX.Element => {
    return (
        <div className="py-20">
            <HeaderElement className="text-center text-4xl font-bold">
                Find your dream role now
            </HeaderElement>
            <ParaElement className="text-center py-3">
                Multiple jobs for you to explore
            </ParaElement>
        </div>
    );
};
