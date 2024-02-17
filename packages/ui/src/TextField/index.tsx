import React from "react";

interface TextFieldProps {
    labelClass: string;
    labelHtmlFor: string;
    label: string;
    inputBoxClass: string;
    inputBoxId: string;
    inputType: string;
    inputValue: string;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField(props: TextFieldProps): JSX.Element {
    return (
        <div>
            <label className={props.labelClass} htmlFor={props.labelHtmlFor}>
                {props.label}
            </label>
            <div className="mt-2">
                <input
                    className={props.inputBoxClass}
                    id={props.inputBoxId}
                    onChange={props.changeHandler}
                    type={props.inputType}
                    value={props.inputValue}
                />
            </div>
        </div>
    );
}
