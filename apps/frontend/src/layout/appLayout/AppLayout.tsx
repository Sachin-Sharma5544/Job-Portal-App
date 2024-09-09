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
            <div className="px-32 bg-gradient-to-tr from-slate-500 to-cyan-100 ">
                <main>{props.children}</main>
            </div>
            <div className="px-24 py-8 bg-gradient-to-tr from-slate-900 to-cyan-700 ">
                <Footer />
            </div>
        </>
    );
};

export default Layout;
