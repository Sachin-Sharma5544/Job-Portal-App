import React, { useState } from "react";
import { HeaderElement, ParaElement } from "@repo/ui";
import { HOME_HEADING_TEXT, HOME_JOB_EXPLORE_TEXT } from "@repo/constants";
import axios from "axios";
export const AutoCompleteComponent = (): JSX.Element => {
    const [location, setLocation] = useState<string>("");

    const handleLocation = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="w-full h-40 border-2 flex justify-center items-center">
            <div className=" border-2 w-[85%] h-28 ">
                <input value={location} onChange={handleLocation} />
            </div>
        </div>
    );
};
