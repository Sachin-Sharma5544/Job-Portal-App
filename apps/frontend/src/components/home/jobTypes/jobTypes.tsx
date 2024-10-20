import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type JobsType } from "@repo/datatypes";
import { type RootState } from "../../../redux/store";
import { fetchJobsTypeRequest } from "../../../redux/slices/jobsSlice";
import {
    pageClickLocation,
    setSelectedJobType,
} from "../../../redux/slices/userActionSlice";
import TrendingJobIcon from "./jobTypesIcon";

export const TrendingJobs = (): JSX.Element => {
    const jobsType = useSelector((state: RootState) => state.jobs.jobsType);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchJobsTypeRequest());
    }, [dispatch]);

    const handleIconClick = (jobType: JobsType): void => {
        navigate(`/jobs/${jobType.jobName.toLowerCase()}`);
        dispatch(pageClickLocation("Home"));
        dispatch(setSelectedJobType(jobType));
    };

    return (
        <>
            <h1 className="text-2xl mt-10 mb-10 font-bold">Job Types</h1>
            <ul className="flex justify-around flex-wrap">
                {jobsType.map((job: JobsType) => (
                    <button
                        className="w-40 h-16 border-[1px] border-zinc-300 bg-zinc-100 mb-5 mr-2 rounded-lg  hover:scale-105 hover:cursor-pointer"
                        key={job._id}
                        onClick={() => {
                            handleIconClick(job);
                        }}
                        type="button"
                    >
                        <div className="flex justify-around items-center h-full ml-2 mr-2">
                            <TrendingJobIcon
                                classes="text-sky-950 test"
                                companyName={job.jobName}
                            />
                            <h4 className="font-bold text-sky-950 ">
                                {job.jobName}
                            </h4>
                        </div>
                    </button>
                ))}
            </ul>
        </>
    );
};
