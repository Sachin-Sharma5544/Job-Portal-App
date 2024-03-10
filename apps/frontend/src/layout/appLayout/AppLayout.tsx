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
            <div className="px-44 py-2">
                <main>{props.children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
