import React from "react";

interface NavbarLayoutProps {
    children: React.ReactNode;
}

const NavbarLayout = (props: NavbarLayoutProps): JSX.Element => {
    return (
        <div className="w-full  bg-zinc-800 h-16 border border-zinc-800 flex items-center justify-center">
            <div className="flex h-8 items-center w-full mx-1">
                <div className="h-4 w-full mx-2">{props.children}</div>
            </div>
        </div>
    );
};

export default NavbarLayout;
