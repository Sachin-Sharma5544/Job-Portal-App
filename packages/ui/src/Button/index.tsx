import * as React from "react";

interface ButtonProps {
    children: string;
    className?: string;
    onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element {
    return (
        <button className={props.className} type="button">
            {props.children}
        </button>
    );
}
