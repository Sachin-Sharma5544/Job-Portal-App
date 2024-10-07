import React, { useState } from "react";
import { Button } from "@repo/ui";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AutoCompleteComponent from "../../common/autocomplete/Autocomplete";
import { Dropdown } from "../../common/dropdown/Dropdown";
import { type TextFieldProps } from "../../common/PropertyTypes";

const border: TextFieldProps = {
    border: "none",
    hoverBorder: "none",
    focusedBorder: "none",
};

export const SearchJobs = (): JSX.Element => {
    const [location, setLocation] = useState<string>("");
    const [value, setValue] = useState<number | string>("");

    const handleLocation = async (
        e: React.ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
        const { value } = e.target;
        setLocation(value);
        if (!value) return;

        const URL = `https://us1.locationiq.com/v1/autocomplete?q=${value}&countrycodes=in&tag=place%3Acity&key=pk.840ec05a9928bfaf432fde14f71fdf7f`;

        const options = {
            headers: { accept: "application/json" },
        };

        const data = await axios.get(URL, options);

        console.log(data);
    };
    return (
        <div className="w-full border-[1px] border-black flex justify-center items-center rounded-2xl h-18 bg-white">
            <div className="w-[100%] flex items-center justify-between ">
                {/*Search Skills*/}
                <div className="w-[50%] px-[-10px] ">
                    <AutoCompleteComponent
                        border={border}
                        displayLens
                        placeHolder="Enter Skills / Designations / Companies"
                    />
                </div>

                {/*Select  Experience*/}
                <div className="w-[20%] border-l-[1px] border-r-[1px] border-stone-300">
                    <Dropdown border={border} placeHolder="Select Experience" />
                </div>

                {/*Search Location*/}
                <div className="w-[20%] border-r-[1px] border-stone-300">
                    <AutoCompleteComponent
                        border={border}
                        displayLens
                        placeHolder="Search Location"
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
