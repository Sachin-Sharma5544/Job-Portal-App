import React, { useEffect, useState } from "react";
import {
    Button,
    AutoCompleteComponent,
    Dropdown,
    type TextFieldProps,
} from "@repo/ui";
import axios from "axios";

const border: TextFieldProps = {
    border: "none",
    hoverBorder: "none",
    focusedBorder: "none",
};

export const SearchJobs = (): JSX.Element => {
    const [place, setPlace] = useState<string>("");
    const [placeValue, setPlaceValue] = useState<string>("");
    const [placeOptions, setPlaceOptions] = useState([]);

    const handleLocation = async (
        value: string
    ): Promise<string[] | undefined> => {
        setPlace(value);
        if (!value) return;

        const URL = `https://us1.locationiq.com/v1/autocomplete`;

        const options = {
            headers: { accept: "application/json" },
            params: {
                q: place,
                countrycodes: "in",
                tag: "place:city",
                key: "pk.840ec05a9928bfaf432fde14f71fdf7f",
            },
        };

        const data = await axios.get(URL, options);
        // if (Array.isArray(data)) {
        //     const placeArray = data.map((item) => item.display_place);
        //     console.log(">>>>> place array", placeArray);
        //     setPlaceOptions(placeArray);
        // }
        return data;
    };

    const handlePlaceChange = async (value: string): void => {
        setPlace(value);

        const data = await handleLocation(value);
        const placeArray = data.data.map((item) => item.display_place);
        setPlaceOptions(placeArray);
        console.log("Place Array", placeArray);
    };

    useEffect(() => {
        void handleLocation("lu");
    }, []);

    return (
        <div className="w-full border-[1px] border-black flex justify-center items-center rounded-2xl h-18 bg-white">
            <div className="w-[100%] flex items-center justify-between ">
                {/*Search Skills*/}
                <div className="w-[50%] px-[-10px] ">
                    <AutoCompleteComponent
                        border={border}
                        displayLens
                        options={[]}
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
                        handleInputChange={handlePlaceChange}
                        inputValue={place}
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
