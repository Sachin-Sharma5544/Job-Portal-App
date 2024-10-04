import React, { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";
import Card from "../common/card/Card";

interface Company {
    _id: string;
    companyName: string;
    companyType: string;
    industry: string;
    reviewCount: number;
    reviews: number;
}

interface CompanyList {
    company: Company[];
}

interface ResponseData extends AxiosResponse {
    data: CompanyList;
}

const CompanyList = (): JSX.Element => {
    const [companies, setCompanies] = useState<Company[]>([]);
    useEffect(() => {
        const fetchCompanyList = async (): Promise<void> => {
            const response: ResponseData = await axios.get(
                "http://localhost:5002/api/companies"
            );

            setCompanies(response.data.company);
        };

        void fetchCompanyList();
    }, []);
    return (
        <div>
            <p className="pt-5">Showing {companies.length} companies</p>
            {/* Card Container for companies*/}
            <div className="overflow-scroll ">
                <div className="max-h-[760px] py-2 flex flex-wrap justify-start gap-x-[98px] pr-2">
                    {companies.map((company) => (
                        <Card
                            classes="my-4 max-h-40 sm:max-w-[490px] md:max-w-[440px] lg:max-w-[485px] "
                            key={company._id}
                        >
                            <>
                                <h2 className="text-xl font-semibold">
                                    {company.companyName}
                                </h2>
                                <div className=" text-neutral-500">
                                    <div className="w-[500px] flex justify-stretch gap-6 my-4 ">
                                        <p className="border-[2px] border-neutral-300 px-[12px] py-[2px] rounded-xl">
                                            {company.companyType}
                                        </p>
                                        <p className="border-[2px] border-neutral-300 px-[12px] py-[2px] rounded-xl">
                                            {company.industry}
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            className="inline-block pb-1"
                                            fill="#fdaa29"
                                            height="12px"
                                            viewBox="0 0 576 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>{" "}
                                        {company.reviews} |{" "}
                                        {company.reviewCount} reviews
                                    </div>
                                </div>
                            </>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="h-[20px]" />
        </div>
    );
};

export default CompanyList;
