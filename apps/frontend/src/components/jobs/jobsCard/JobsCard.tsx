import React from "react";
import { Card, CardWrapper } from "@repo/ui";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { type RootState } from "../../../redux/store";
import { ReviewCard } from "../../common";
import { getSelectedJobName } from "../utils/jobUtils";

export const JobsCard = (): JSX.Element => {
    const param = useParams();

    const jobsType = useSelector((state: RootState) => state.jobs.jobsType);

    return (
        <div>
            <div>
                <div className=" pt-10 pb-5">
                    <h1 className="text-3xl font-bold">
                        {/* {job ? job[0].toUpperCase() + job.slice(1) : ""}{" "} */}
                        {` ${getSelectedJobName(jobsType, param)} `}
                    </h1>
                </div>
                <div className="">
                    <p className="pb-5">Showing {jobsType.length} jobs</p>
                </div>
            </div>

            <CardWrapper>
                {jobsType.map((jobItem) => (
                    <Card
                        classes="my-4 max-h-60 sm:max-w-[490px] md:max-w-[440px] lg:max-w-[485px] shadow-slate-900 sm:w-[490px] md:w-[440px] lg:w-[520px] 2xl:max-w-[520px]"
                        key={jobItem.title}
                    >
                        <>
                            <h2 className="text-xl font-semibold">
                                {jobItem.title}
                            </h2>
                            <div className="text-sm text-neutral-500 py-1">
                                <span className="text-neutral-700 ">
                                    {jobItem.company}{" "}
                                </span>
                                <ReviewCard count={150} rating={1.2} />
                            </div>
                            <div className="flex justify-start gap-4 pb-2 pt-2 text-neutral-500">
                                <div>Exp: 3-5 years</div>
                                <div>Sal: Not Disclosed</div>
                                <div>Location: Mumbai</div>
                            </div>
                            <div className="text-neutral-500">
                                {jobItem.description}{" "}
                            </div>
                        </>
                    </Card>
                ))}
            </CardWrapper>
            <div className="h-[20px]" />
        </div>
    );
};
