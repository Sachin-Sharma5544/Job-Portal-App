import * as React from "react";

interface ListsComponentProps {
    className?: string;
    data?: string[];
    children: string[];
}
export function ListsComponents(props: ListsComponentProps): JSX.Element {
    return (
        <div>
            {props.children.map((item) => (
                <li className={props.className} key={item}>
                    {item}
                </li>
            ))}
        </div>
    );
}
