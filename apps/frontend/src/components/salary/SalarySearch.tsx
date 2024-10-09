import React, { useState } from "react";
import { Button, AutoCompleteComponent, type TextFieldProps } from "@repo/ui";
import { locationInstance } from "../../axios";

const border: TextFieldProps = {
    border: "1px solid black",
    hoverBorder: "1px solid green",
    focusedBorder: "1px solid orange",
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

export const SearchSalary = (): JSX.Element => {
    const [inputLocation, setInputLocation] = useState<string>("");
    const [selectedLocation, setSelectedLocation] = useState<unknown>(null);
    const [locationOptions, setLocationOptions] = useState<string[]>([]);

    const handleLocation = async (
        value: string
    ): Promise<string[] | undefined> => {
        if (!value) {
            setLocationOptions([]);
            return;
        }

        const data = await locationInstance(value).get<Location[]>("");
        if (Array.isArray(data.data)) {
            const placeArray = data.data.map(
                (item: Location) => item.display_place
            );
            setLocationOptions(placeArray);
        }
    };

    const handleInputLocationChange = (value: string): void => {
        setInputLocation(value);
        void handleLocation(value);
    };

    const handleSelectedLocationChange = (value: unknown): void => {
        setSelectedLocation(value);
    };
    return (
        <div className="py-7 bg-white rounded-lg rounded-tr-3xl">
            <div className="flex justify-evenly items-center">
                <div className="w-[40%]">
                    <AutoCompleteComponent
                        border={border}
                        displayLens
                        options={[]}
                        placeHolder="Job Titile"
                    />
                </div>
                <div className="w-[40%]">
                    <AutoCompleteComponent
                        border={border}
                        displayLens
                        handleInputChange={handleInputLocationChange}
                        handleValueChange={handleSelectedLocationChange}
                        inputValue={inputLocation}
                        options={locationOptions}
                        placeHolder="Location"
                        value={selectedLocation}
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
