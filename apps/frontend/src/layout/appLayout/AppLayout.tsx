import React from "react";
import Navbar from "../../components/navbar/Navbar";

interface LayoutProps {
    name?: string;
    children: React.ReactNode;
}

const Layout = function (props: LayoutProps): React.ReactNode {
    return (
        <>
            <Navbar />
            <main className="px-4 py-2">{props.children}</main>
        </>
    );
};

export default Layout;
