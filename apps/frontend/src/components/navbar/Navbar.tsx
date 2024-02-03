// import { CounterButton, Link, LinkReactRouter } from "@repo/ui";
import React from "react";
import { LinkReactRouter } from "@repo/ui";

const Navbar = (): React.ReactNode => {
    return (
        <div className="w-full  bg-slate-600 h-20 ">
            <div className="flex place-items-center border h-full">
                <div className=" flex place-items-center ">
                    <div className="text-white text-xl pr-2">WorkWise</div>
                    <div className="pr-10">
                        <svg
                            className="w-10 h-10"
                            fill="white"
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
                </div>
                <div>
                    <LinkReactRouter className="" to="/">
                        Home
                    </LinkReactRouter>
                    <LinkReactRouter className="pl-5" to="/test">
                        Test
                    </LinkReactRouter>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
