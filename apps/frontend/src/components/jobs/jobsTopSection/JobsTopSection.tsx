import React, { useState } from "react";
import { Card, CardSlider } from "@repo/ui";
import { useSelector } from "react-redux";

interface JobsTopSectionProps {
    fromWhere: string;
}

export const JobsTopSection = (
    props: JobsTopSectionProps
): JSX.Element | null => {
    const { fromWhere } = props;
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
    switch (fromWhere) {
        case "Home":
        case "home":
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
        case "Test":
        case "test":
            return <div>My Company</div>;
        default:
            return null;
    }
};
