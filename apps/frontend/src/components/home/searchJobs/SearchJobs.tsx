import React, { useState } from "react";
import {
    Button,
    AutoCompleteComponent,
    Dropdown,
    type TextFieldProps,
} from "@repo/ui";
import { EXPERIENCE } from "@repo/constants";
import MenuItem from "@mui/material/MenuItem";
import { type SelectChangeEvent } from "@mui/material/Select";
import { locationInstance, axiosPublicInstance } from "../../../axios";

const border: TextFieldProps = {
    border: "none",
    hoverBorder: "none",
    focusedBorder: "none",
};

interface Location {
    place_id: string;
    display_place: string;
    display_address: string;
    lat: string;
    lon: string;
    address: {
        name: string;
        county: string;
        state: string;
        postcode: string;
        country: string;
        country_code: string;
    };
}

export const SearchJobs = (): JSX.Element => {
    const [place, setPlace] = useState<string>("");
    const [placeValue, setPlaceValue] = useState<unknown>(null);
    const [placeOptions, setPlaceOptions] = useState<string[]>([]);
    const [loadingPlace, setLoadingPlace] = useState<boolean>(false);
    const [experience, setExperience] = useState<string>("");
    const [skills, setSkills] = useState<string>("");
    const [skillsValue, setSkillsValue] = useState<unknown>(null);
    const [skillsOptions, setSkillsOptions] = useState<string[]>([]);
    const [loadingSkills, setLoadingSkills] = useState<boolean>(false);

    const getExperienceOptions = (): React.ReactNode => {
        return EXPERIENCE.map(
            (option: { id: number; value: string; text: string }) => {
                return (
                    <MenuItem key={option.id} value={option.value}>
                        {option.text}
                    </MenuItem>
                );
            }
        );
    };

    const handleSkillsInputChange = async (value: string): Promise<void> => {
        setSkills(value);

        if (!value) {
            setSkillsOptions([]);
            return;
        }

        setLoadingSkills(true);
        const data = await axiosPublicInstance(value).get("/jobs/job-text");

        console.log("Response Data", data);

        if (Array.isArray(data.data.jobs)) {
            const skillsArray = data.data.jobs.map(
                (item: Location) => item.suggestion
            );
            setSkillsOptions(skillsArray);
        }
        setLoadingSkills(false);
    };

    const handleSkillsChange = (value: unknown): void => {
        setSkillsValue(value);
    };

    const handleExperienceChange = (e: SelectChangeEvent<unknown>): void => {
        setExperience(e.target.value as string);
    };

    const handleLocation = async (
        value: string
    ): Promise<string[] | undefined> => {
        if (!value) {
            setPlaceOptions([]);
            return;
        }
        setLoadingPlace(true);
        const data = await locationInstance(value).get<Location[]>("");
        if (Array.isArray(data.data)) {
            const placeArray = data.data.map(
                (item: Location) => item.display_place
            );
            setPlaceOptions(placeArray);
        }
        setLoadingPlace(false);
    };

    const handlePlaceInputChange = (value: string): void => {
        setPlace(value);
        void handleLocation(value);
    };

    const handlePlaceChange = (value: unknown): void => {
        setPlaceValue(value);
    };

    return (
        <div className="w-full border-[1px] border-black flex justify-center items-center rounded-2xl h-18 bg-white">
            <div className="w-[100%] flex items-center justify-between ">
                {/*Search Skills*/}
                <div className="w-[50%] px-[-10px] ">
                    <AutoCompleteComponent
                        border={border}
                        displayLens
                        handleInputChange={handleSkillsInputChange}
                        handleValueChange={handleSkillsChange}
                        inputValue={skills}
                        loading={loadingSkills}
                        options={skillsOptions}
                        placeHolder="Enter Skills / Designations / Companies"
                        value={skillsValue}
                    />
                </div>

                {/*Select  Experience*/}
                <div className="w-[20%] border-l-[1px] border-r-[1px] border-stone-300">
                    <Dropdown
                        border={border}
                        handleDropdownChange={handleExperienceChange}
                        menuoptions={getExperienceOptions}
                        placeHolder="Select Experience"
                        value={experience}
                    />
                </div>

                {/*Search Location*/}
                <div className="w-[20%] border-r-[1px] border-stone-300">
                    <AutoCompleteComponent
                        border={border}
                        displayLens
                        handleInputChange={handlePlaceInputChange}
                        handleValueChange={handlePlaceChange}
                        inputValue={place}
                        loading={loadingPlace}
                        options={placeOptions}
                        placeHolder="Search Location"
                        value={placeValue}
                    />
                </div>

                <div className="w-[10%]">
                    <Button className=" px-4 text-center py-2 border-[1px] rounded-3xl w-full text-white bg-slate-800">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};
