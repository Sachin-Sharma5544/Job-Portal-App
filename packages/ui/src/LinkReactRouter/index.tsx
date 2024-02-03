import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
    to: string;
    children?: React.ReactNode;
    className: string;
}
export function LinkReactRouter(props: LinkProps): JSX.Element {
    return (
        <Link className={props.className} to={props.to}>
            {props.children}
        </Link>
    );
}
