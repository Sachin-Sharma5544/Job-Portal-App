// import { Link, LinkReactRouter } from "@repo/ui";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (): React.ReactNode => {
    return (
        <div className="w-full  bg-slate-600 h-20 ">
            <div className="flex place-items-center border h-full">
                <div className=" flex place-items-center p-2">
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
                    <div className="text-white text-xl pl-2">WorkWise</div>
                </div>
                <div>
                    {/* <Link href="/home">Home</Link> */}
                    {/* <LinkReactRouter to="/new">Test</LinkReactRouter> */}
                    {/* <Link href="/new">test</Link> */}
                    {/* <a href="/home">Home</a> */}
                    <Link to="Test">test</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
