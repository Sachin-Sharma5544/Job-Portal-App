import React, { useState } from "react";
import { Card, CardSlider, Button } from "@repo/ui";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { type RootState } from "../../../redux/store";
import { getSelectedCompanyName } from "../utils/jobUtils";
import { ReviewCard } from "../../common";

interface JobsTopSectionProps {
    fromWhere?: string;
}

export const JobsTopSection = (
    props: JobsTopSectionProps
): JSX.Element | null => {
    const params = useParams();
    const pageClickLocation = useSelector(
        (state: RootState) => state.pageClickLocation.clickLocation
    );
    const [selectedCard, setSelectedCard] = useState({
        _id: null,
        jobName: null,
    });
    const trendingJobs = useSelector(
        (state: RootState) => state.trendingJobs.jobs
    );

    const handleCardClick = (tJob: unknown): void => {
        setSelectedCard({ _id: tJob._id, jobName: tJob.jobName });
    };
    switch (pageClickLocation) {
        case "Home":
        case "home":
            return (
                <CardSlider>
                    <>
                        {trendingJobs.map((tJob: unknown) => (
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
                                            checked={
                                                tJob._id === selectedCard._id
                                            }
                                            className="appearance-none w-3 h-3 text-black rounded-full absolute right-3 top-3 checked:bg-black checked:border-none"
                                            type="checkbox"
                                        />
                                    ) : null}
                                </>
                            </Card>
                        ))}
                    </>
                </CardSlider>
            );
        case "Company":
        case "company":
            return (
                <div className="pt-20">
                    <div className="w-full h-48 rounded-xl shadow-slate-500 shadow-lg pt-[2px] bg-slate-100">
                        <div className="mx-6 my-4 flex justify-start gap-8 items-center">
                            <div className="border-2 w-36 h-36 rounded-2xl text-center ">
                                <img
                                    alt="logo"
                                    height="144px"
                                    src=""
                                    width="144px"
                                />
                            </div>
                            <div className="h-36 w-full">
                                <h1 className="text-2xl font-bold pb-2">
                                    {params.company}
                                </h1>
                                <div>
                                    {" "}
                                    <ReviewCard count={50} rating={1.2} />
                                </div>
                                <div className=" text-neutral-500 text-sm">
                                    <div className="flex justify-stretch gap-2 my-4 ">
                                        <p
                                            className="border-[2px] border-neutral-300 px-[12px] py-[2px] rounded-xl max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap"
                                            title="company ytysuhkjbnmas"
                                        >
                                            company
                                        </p>
                                        <p
                                            className="border-[2px] border-neutral-300 px-[12px] py-[2px] rounded-xl max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap"
                                            title=" industry"
                                        >
                                            industry
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-36 text-right w-full">
                                <Button className="inline-block border-2 w-[8rem] py-2 rounded-full text-xl font-bold text-white border-blue-500 bg-blue-500">
                                    Follow
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};
