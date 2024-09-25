import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../../redux/store";
import TrendingJobIcon from "./TrendingJobIcon";
import { useNavigate } from "react-router-dom";

export const TrendingJobs = (): JSX.Element => {
    const trendingJobs = useSelector(
        (state: RootState) => state.trendingJobs.jobs
    );

    const navigate = useNavigate();

    const handleIconClick = (jobName: string): void => {
        navigate(`/trending-jobs/${jobName.toLowerCase()}`);
    };

    return (
        <>
            <h1 className="text-2xl mt-10 mb-10 font-bold">Trending Jobs</h1>
            <ul className="flex justify-around flex-wrap">
                {trendingJobs.map((job) => (
                    <li
                        className="w-40 h-16 border-2 mb-5 mr-2 rounded-lg border-zinc-300 hover:scale-105 hover:cursor-pointer"
                        key={job.id}
                        onClick={() => {
                            handleIconClick(job.jobName);
                        }}
                    >
                        <div className="flex justify-around items-center h-full ml-2 mr-2">
                            <TrendingJobIcon companyName={job.jobName} />
                            <h4 className="font-bold">{job.jobName}</h4>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};
