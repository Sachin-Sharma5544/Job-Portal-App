import { InputField } from "@repo/ui";
import React from "react";

const Navbar = (props: any): React.ReactNode => {
    return (
        <div className="w-full bg-red-500 h-20">
            <InputField
                className="w-full text-cyan-900 border-e-slate-50"
                inputChange={() => true}
                value="test"
            />
        </div>
    );
};

export default Navbar;
