import React from "react";
import { Navbar, Footer } from "../../components";

interface LayoutProps {
    name?: string;
    children: React.ReactNode;
}

const Layout = function (props: LayoutProps): React.ReactNode {
    return (
        <>
            <Navbar />
            <div className="px-44 py-2 bg-gradient-to-tr from-slate-500 to-cyan-100 ">
                <main className="text h-svh">{props.children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
