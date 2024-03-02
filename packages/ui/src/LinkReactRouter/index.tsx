import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
    to: string;
    children?: React.ReactNode;
    className: string;
    onClick?: () => void;
}
export function LinkReactRouter(props: LinkProps): JSX.Element {
    return (
        <Link className={props.className} onClick={props.onClick} to={props.to}>
            {props.children}
        </Link>
    );
}
