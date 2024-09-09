import React, { useState } from "react";
import { HeaderElement, ParaElement } from "@repo/ui";
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
        <div className="w-full h-36 border-2 flex justify-center items-center">
            <div className="w-[90%] h-28 flex items-center justify-between">
                {/*Search Skills*/}
                <AutoCompleteComponent
                    className="w-[500px]"
                    placeHolder="Enter Skills / Designations / Companies"
                />
                {/*Select  Experience*/}
                <FormControl className="w-[200px]">
                    <InputLabel id="demo-simple-select-label">
                        Select an option
                    </InputLabel>
                    <Select displayEmpty>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                {/*Search Location*/}
                <AutoCompleteComponent
                    className="w-[300px]"
                    placeHolder="Search Location"
                />
            </div>
        </div>
    );
};
