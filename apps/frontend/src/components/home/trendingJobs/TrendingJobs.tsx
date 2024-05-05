import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../../redux/store";

export const TrendingJobs = (): JSX.Element => {
    const trendingJobs = useSelector(
        (state: RootState) => state.trendingJobs.jobs
    );

    return (
        <>
            <h1 className="text-2xl mt-10 mb-10">Trending Jobs</h1>
            <ul className="flex justify-around flex-wrap">
                {trendingJobs.map((job) => (
                    <li
                        className="w-36 h-16 border-2 mb-5 mr-2 rounded-lg border-zinc-300"
                        key={job.id}
                    >
                        <div className="flex justify-between items-center h-full ml-2 mr-2">
                            <h4>{job.jobName}</h4>
                            <span>{">"}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};
