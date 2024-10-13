import React from "react";

interface CardWrapperProps {
    children: React.ReactNode;
}

export function CardWrapper(props: CardWrapperProps): JSX.Element {
    return (
        <div className="overflow-scroll ">
            <div className="max-h-[760px] py-2 flex flex-wrap justify-start gap-x-[98px] pr-2">
                {props.children}
            </div>
        </div>
    );
}
