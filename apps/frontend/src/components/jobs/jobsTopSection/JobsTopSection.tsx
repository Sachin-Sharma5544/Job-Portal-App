import React, { useState, useEffect } from "react";
import { Card, CardSlider, Button } from "@repo/ui";
import { useSelector, useDispatch } from "react-redux";
import { type JobsType } from "@repo/datatypes";
import { type RootState } from "../../../redux/store";
import { ReviewCard } from "../../common";
import { setSelectedJobType } from "../../../redux/slices/userActionSlice";

export const JobsTopSection = (): JSX.Element | null => {
    const pageClickLocation = useSelector(
        (state: RootState) => state.userAction.clickLocation
    );
    const selectedCompany = useSelector(
        (state: RootState) => state.userAction.selectedCompany
    );
    const selectedJobType = useSelector(
        (state: RootState) => state.userAction.selectedJobType
    );
    const jobsType = useSelector((state: RootState) => state.jobs.jobsType);

    const dispatch = useDispatch();

    const handleCardClick = (clickedJobType: JobsType): void => {
        dispatch(setSelectedJobType(clickedJobType));
    };

    switch (pageClickLocation) {
        case "Home":
        case "home":
            return (
                <CardSlider>
                    <>
                        {jobsType.map(
                            (tJob: { _id: string; jobName: string }) => (
                                <Card
                                    classes={`min-w-[220px] min-h-24 flex items-center justify-center relative ${
                                        selectedJobType?._id === tJob._id
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
                                        {selectedJobType?._id === tJob._id ? (
                                            <input
                                                checked={
                                                    selectedJobType._id ===
                                                    tJob._id
                                                }
                                                className="appearance-none w-3 h-3 text-black rounded-full absolute right-3 top-3 checked:bg-black checked:border-none"
                                                type="checkbox"
                                            />
                                        ) : null}
                                    </>
                                </Card>
                            )
                        )}
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
                                    {selectedCompany?.name}
                                </h1>
                                <div>
                                    {" "}
                                    <ReviewCard
                                        count={selectedCompany?.reviewsCount}
                                        rating={selectedCompany?.rating}
                                    />
                                </div>
                                <div className=" text-neutral-500 text-sm">
                                    <div className="flex justify-stretch gap-2 my-4 ">
                                        {selectedCompany?.tagsOrder?.map(
                                            (tag: string | undefined) => (
                                                <p
                                                    className="border-[2px] border-neutral-300 px-[12px] py-[2px] rounded-xl max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap"
                                                    key={tag}
                                                    title={
                                                        selectedCompany?.tags[
                                                            tag
                                                        ]
                                                    }
                                                >
                                                    {selectedCompany.tags[tag]}
                                                </p>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="h-36 text-right w-full">
                                <Button className="inline-block border-2 w-[8rem] py-2 rounded-full text-xl font-bold text-white border-blue-500 bg-blue-500  hover:border-blue-700 hover:bg-blue-700">
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
