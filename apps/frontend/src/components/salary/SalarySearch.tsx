import React from "react";
import { Button, AutoCompleteComponent, type TextFieldProps } from "@repo/ui";

const border: TextFieldProps = {
    border: "1px solid black",
    hoverBorder: "1px solid green",
    focusedBorder: "1px solid orange",
};

export const SearchSalary = (): JSX.Element => {
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
                        options={[]}
                        placeHolder="Location"
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
