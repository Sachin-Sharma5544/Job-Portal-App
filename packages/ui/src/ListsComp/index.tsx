import * as React from "react";

interface ListsComponentProps {
    data: string[];
    children: string[];
}
export function ListsComponents(props: ListsComponentProps): JSX.Element {
    return (
        <div>
            {props.children.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </div>
    );
}
