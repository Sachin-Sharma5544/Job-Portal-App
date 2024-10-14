import React from "react";
import { JobsCard, JobsTopSection } from "../components";

export const JobsPage = (): JSX.Element => {
    return (
        <>
            <JobsTopSection fromWhere="home" />
            <JobsCard />
        </>
    );
};
