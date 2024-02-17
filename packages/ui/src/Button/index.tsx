import * as React from "react";

interface ButtonProps {
    children: string;
    className?: string;
    onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element {
    return (
        <div>
            <button
                className={props.className}
                onClick={() => {
                    props.onClick ? props.onClick() : {};
                }}
                type="button"
            >
                {props.children}
            </button>
        </div>
    );
}
