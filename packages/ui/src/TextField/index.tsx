import React from "react";

interface InputFieldProps {
    className: string;
    value: string;
}
export function InputField(props: InputFieldProps): JSX.Element {
    return (
        <>
            <input className={props.className} value={props.value} />
            <div>test</div>
        </>
    );
}
