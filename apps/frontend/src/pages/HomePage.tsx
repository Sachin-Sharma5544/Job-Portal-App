import React from "react";
import {
    SearchJobs,
    HomeHeading as Heading,
    TrendingJobs,
} from "../components";

export const HomePage = (): JSX.Element => {
    return (
        <>
            <Heading />
            <SearchJobs />
            <TrendingJobs />
        </>
    );
};
