import React from "react";
import {
    SalaryHeading as Heading,
    SalaryBrowse,
    SearchSalary,
} from "../components";

export const SalaryPage = (): JSX.Element => {
    return (
        <>
            <Heading />
            <SearchSalary />
            <SalaryBrowse />
        </>
    );
};
