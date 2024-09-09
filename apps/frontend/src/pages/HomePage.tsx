import React from "react";
import { SearchJobs, Heading, TrendingJobs } from "../components";

export const HomePage = (): JSX.Element => {
    return (
        <>
            <Heading />
            <SearchJobs />
            <TrendingJobs />
        </>
    );
};
