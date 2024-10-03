import React from "react";
import CardSlider from "../components/company/CardSlider";
import CompanyList from "../components/company/CompanyList";

export const CompanyPage = (): JSX.Element => {
    return (
        <>
            <CardSlider />
            <CompanyList />
        </>
    );
};
