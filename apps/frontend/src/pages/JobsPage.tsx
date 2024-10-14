import React, { type ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardSlider } from "@repo/ui";
import { JobsCard } from "../components";

export const JobsPage = (): JSX.Element => {
    const [fromWhere, setFromWhere] = useState("Home");
    const [selectedCard, setSelectedCard] = useState({
        _id: null,
        jobName: null,
    });

    const trendingJobs = useSelector(
        (state: RootState) => state.trendingJobs.jobs
    );

    const handleCardClick = (tJob): void => {
        setSelectedCard({ _id: tJob._id, jobName: tJob.jobName });
    };

    const jobsPageTopSection = (): ReactNode => {
        if (fromWhere === "Home") {
            return (
                <CardSlider>
                    {trendingJobs.map((tJob) => (
                        <Card
                            classes={`min-w-[220px] min-h-24 flex items-center justify-center relative ${
                                selectedCard._id === tJob._id
                                    ? "border-[1px] border-black"
                                    : ""
                            }`}
                            clickHandler={() => {
                                handleCardClick(tJob);
                            }}
                            key={tJob._id}
                        >
                            <>
                                <h1 className="text-xl font-bold">
                                    {tJob.jobName}
                                </h1>
                                {selectedCard._id === tJob._id ? (
                                    <input
                                        checked={tJob._id === selectedCard._id}
                                        className="appearance-none w-3 h-3 text-black rounded-full absolute right-3 top-3 checked:bg-black checked:border-none"
                                        type="checkbox"
                                    />
                                ) : null}
                            </>
                        </Card>
                    ))}
                </CardSlider>
            );
        }

        return null;
    };

    return (
        <>
            {jobsPageTopSection()}
            <JobsCard />
        </>
    );
};
