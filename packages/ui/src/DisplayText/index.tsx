import * as React from "react";

interface DisplayTextProps {
    children: React.ReactNode | string;
    className?: string;
}

export function HeaderElement(props: DisplayTextProps): JSX.Element {
    return <h1 className={props.className}>{props.children}</h1>;
}

export function ParaElement(props: DisplayTextProps): JSX.Element {
    return <p className={props.className}>{props.children}</p>;
}

export function SpanElement(props: DisplayTextProps): JSX.Element {
    return <span className={props.className}>{props.children}</span>;
}
