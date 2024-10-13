import React from "react";
import {
    HeaderElement,
    LinkReactRouter,
    Dropdown,
    Card,
    CardWrapper,
    type DropdownProps,
} from "@repo/ui";

const border: DropdownProps["border"] = {
    border: "1px solid black",
    hoverBorder: "1px solid green",
    focusedBorder: "1px solid orange",
};

const companies = [
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
    {
        _id: "2165767329136",
        companyName: "Elementary School Teacher",
        companyType: "Average Salary 2,33,000.00 PA",
    },
];

export const SalaryBrowse = (): JSX.Element => {
    return (
        <>
            <div className="py-5">
                {/* Section Header */}
                <HeaderElement className="text-2xl font-bold pt-6">
                    Browse top-paying jobs by industry
                </HeaderElement>
            </div>

            <div className="w-1/3">
                <HeaderElement className="text-lg font-bold">
                    Choose an industry
                </HeaderElement>
                <div className="mt-2 h-12">
                    <Dropdown border={border} placeHolder="Select Industry" />
                </div>
            </div>

            <div>
                <p className="pt-5">Showing {companies.length} companies</p>
                {/* Card Container for companies*/}
                <CardWrapper>
                    {companies.map((company) => (
                        <Card
                            classes="my-4 max-h-40 sm:max-w-[490px] md:max-w-[440px] lg:max-w-[485px] shadow-slate-900"
                            key={company._id}
                        >
                            <>
                                <h2 className="text-xl font-semibold">
                                    {company.companyName}
                                </h2>
                                <div className="">
                                    <div className="w-[250px] flex justify-stretch my-4 text-blue-500">
                                        <p className="border-neutral-300 ">
                                            {company.companyType}
                                        </p>
                                    </div>
                                    <LinkReactRouter
                                        className="underline"
                                        to=""
                                    >
                                        View Jobs
                                    </LinkReactRouter>
                                </div>
                            </>
                        </Card>
                    ))}
                </CardWrapper>
                <div className="h-[20px]" />
            </div>
        </>
    );
};
