import React, { useState } from "react";
import { Button } from "@repo/ui";
import { HOME_HEADING_TEXT, HOME_JOB_EXPLORE_TEXT } from "@repo/constants";
import axios from "axios";
import AutoCompleteComponent from "../../common/Autocomplete/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
        <div className="w-full border-2 border-stone-200 flex justify-center items-center rounded-2xl h-18 bg-white">
            <div className="w-[100%] flex items-center justify-between ">
                {/*Search Skills*/}
                <div className="w-[50%] px-[-10px] ">
                    <AutoCompleteComponent
                        displayLens
                        placeHolder="Enter Skills / Designations / Companies"
                    />
                </div>

                {/*Select  Experience*/}
                <div className="w-[20%] border-l-2 border-r-2 border-stone-200">
                    <FormControl className="w-full">
                        <Select
                            displayEmpty
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                            renderValue={(selected) => {
                                if (selected === "") {
                                    return "Select Experience";
                                }

                                return selected;
                            }}
                            value={value}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/*Search Location*/}
                <div className="w-[20%] border-r-2 border-stone-200">
                    <AutoCompleteComponent
                        displayLens
                        placeHolder="Search Location"
                    />
                </div>

                <div className="w-[10%]">
                    <Button className=" px-4 text-center py-2 border-2 rounded-3xl w-full text-white bg-slate-800">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};
