import React from "react";
import { WORK, WISE } from "@repo/constants";

interface BrandLogoProps {
    bagFill: string;
}

export function BrandLogo(props: BrandLogoProps): JSX.Element {
    return (
        <>
            <div className="text-white text-[24px]">
                <span className="text-orange-300">{WORK}</span>
                <span className="text-sky-400">{WISE}</span>
            </div>

            <div className="h-5">
                <svg
                    className="h-full"
                    fill={props.bagFill}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        d="M11 4V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1ZM9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                        fillRule="evenodd"
                    />
                    <path d="M3 11.83V12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17H4c-.35 0-.687-.06-1-.17Z" />
                </svg>
            </div>
        </>
    );
}
