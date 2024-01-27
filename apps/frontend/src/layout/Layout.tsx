import React from "react";

interface LayoutProps {
    name?: string;
    children: React.ReactNode;
}

const Layout = function (props: LayoutProps): React.ReactNode {
    return (
        <div>
            <div>Navbar</div>
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
