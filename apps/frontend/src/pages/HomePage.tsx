import React from "react";
import { AutoCompleteComponent, Heading, TrendingJobs } from "../components";

export const HomePage = (): JSX.Element => {
    return (
        <>
            <Heading />
            <AutoCompleteComponent />
            <TrendingJobs />
        </>
    );
};
