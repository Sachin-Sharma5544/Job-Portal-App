import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { type RootState } from "../../../redux/store";
import { fetchTrendingJobsRequest } from "../../../redux/slices/trendingJobsSlice";
import { pageClickLocation } from "../../../redux/slices/userActionSlice";
import TrendingJobIcon from "./TrendingJobIcon";

export const TrendingJobs = (): JSX.Element => {
    const trendingJobs = useSelector(
        (state: RootState) => state.trendingJobs.jobs
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchTrendingJobsRequest());
    }, [dispatch]);

    const handleIconClick = (jobName: string): void => {
        navigate(`/trending-jobs/${jobName.toLowerCase()}`);
        dispatch(pageClickLocation("Home"));
    };

    return (
        <>
            <h1 className="text-2xl mt-10 mb-10 font-bold">Trending Jobs</h1>
            <ul className="flex justify-around flex-wrap">
                {trendingJobs.map((job: { _id: string; jobName: string }) => (
                    <button
                        className="w-40 h-16 border-[1px] border-zinc-300 bg-zinc-100 mb-5 mr-2 rounded-lg  hover:scale-105 hover:cursor-pointer"
                        key={job._id}
                        onClick={() => {
                            handleIconClick(job.jobName);
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
