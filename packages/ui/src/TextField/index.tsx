import React from "react";

interface TextFieldProps {
    labelClass: string;
    labelHtmlFor: string;
    label: string;
    inputBoxClass: string;
    inputBoxId: string;
    inputType: string;
    inputValue: string;
    inputChangeHandler: (a: string) => void;
}

function TextField(props: TextFieldProps): JSX.Element {
    return (
        <div>
            <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="email"
            >
                {props.label}
            </label>
            <div className="mt-2">
                <input
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="email"
                    name="email"
                    onChange={(e) => {
                        props.inputChangeHandler(e.target.value);
                    }}
                    type="email"
                    value={props.inputValue}
                />
            </div>
        </div>
    );
}

export default TextField;
