import React, { useEffect } from "react";
import { Card, CardWrapper } from "@repo/ui";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { type RootState } from "../../../redux/store";
import { ReviewCard } from "../../common";
import { getSelectedJobName } from "../utils/jobUtils";
import { fetchJobsRequest } from "../../../redux/slices/jobsSlice";
import JobCardIcon from "../icon/JobCardIcon";

export const JobsCard = (): JSX.Element => {
    const param = useParams();
    const jobsType = useSelector((state: RootState) => state.jobs.jobsType);
    const jobs = useSelector((state: RootState) => state.jobs.jobs);
    const selectedJobtype = useSelector(
        (state: RootState) => state.userAction.selectedJobType
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobsRequest(selectedJobtype));
    }, [dispatch, selectedJobtype]);

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
                    <p className="pb-5">Showing {jobs.length} jobs</p>
                </div>
            </div>

            <CardWrapper>
                {jobs.map((job) => (
                    <Card
                        classes="my-4 max-h-60 sm:max-w-[490px] md:max-w-[440px] lg:max-w-[485px] shadow-slate-900 sm:w-[490px] md:w-[440px] lg:w-[520px] 2xl:max-w-[520px]"
                        key={job.title}
                    >
                        <>
                            <h2 className="text-xl font-semibold">
                                {job.title}
                            </h2>
                            <div className="text-sm text-neutral-500 py-1">
                                <span className="text-neutral-700 ">
                                    {job.company.name}{" "}
                                </span>
                                <ReviewCard
                                    count={job.company.reviewsCount}
                                    rating={job.company.rating}
                                />
                            </div>
                            <div className="flex justify-start items-center gap-4 pb-2 pt-2 text-neutral-800 text-xs">
                                <div className="flex justify-center items-center gap-2">
                                    <JobCardIcon iconType="Experience" />
                                    <span>
                                        {job.experience.min} -{" "}
                                        {job.experience.max} years
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <JobCardIcon iconType="Salary" />
                                    <span>
                                        {job.salary.min} -{job.salary.max}
                                    </span>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <JobCardIcon iconType="Location" />
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <div className="text-neutral-500">
                                {job.description}{" "}
                            </div>
                        </>
                    </Card>
                ))}
            </CardWrapper>
            <div className="h-[20px]" />
        </div>
    );
};
