import React, { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";
import { Card, CardWrapper } from "@repo/ui";
import { PORT } from "@repo/constants";
import { ReviewCard } from "../common";
import { useNavigate } from "react-router-dom";

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

interface CompanyListProps {
    industryType: string | null;
}

const CompanyList = (props: CompanyListProps): JSX.Element => {
    const [companies, setCompanies] = useState<Company[]>([]);

    const navigate = useNavigate();

    const { industryType } = props;

    useEffect(() => {
        const fetchCompanyList = async (): Promise<void> => {
            const url = industryType
                ? `http://localhost:${PORT}/api/companies/${industryType}`
                : `http://localhost:${PORT}/api/companies`;
            const response: ResponseData = await axios.get(url);

            setCompanies(response.data.company);
        };

        void fetchCompanyList();
    }, [industryType]);
    return (
        <div>
            <p className="pt-5">Showing {companies.length} companies</p>
            {/* Card Container for companies*/}
            <CardWrapper>
                {companies.map((company) => (
                    <Card
                        classes="my-4 max-h-40 sm:max-w-[490px] md:max-w-[440px] lg:max-w-[485px] shadow-slate-900"
                        clickHandler={() => {
                            navigate(`/company/${company.companyName}`);
                        }}
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
                                    <ReviewCard
                                        count={company.reviewCount}
                                        rating={company.reviews}
                                    />
                                </div>
                            </div>
                        </>
                    </Card>
                ))}
            </CardWrapper>

            <div className="h-[20px]" />
        </div>
    );
};

export default CompanyList;
