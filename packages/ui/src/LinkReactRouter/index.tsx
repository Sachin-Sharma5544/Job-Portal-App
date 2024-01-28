import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
    to: string;
    children?: React.ReactNode;
}
export function LinkReactRouter(props: LinkProps): JSX.Element {
    return <Link to={props.to}>{props.children}</Link>;
}
