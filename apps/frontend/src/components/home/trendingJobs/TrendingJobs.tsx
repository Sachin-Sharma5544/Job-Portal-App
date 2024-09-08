import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../../redux/store";
import TrendingJobIcon from "./TrendingJobIcon";

export const TrendingJobs = (): JSX.Element => {
    const trendingJobs = useSelector(
        (state: RootState) => state.trendingJobs.jobs
    );

    return (
        <>
            <h1 className="text-2xl mt-10 mb-10 font-bold">Trending Jobs</h1>
            <ul className="flex justify-around flex-wrap">
                {trendingJobs.map((job) => (
                    <li
                        className="w-40 h-16 border-2 mb-5 mr-2 rounded-lg border-zinc-300"
                        key={job.id}
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
