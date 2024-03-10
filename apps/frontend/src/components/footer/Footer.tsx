import { BrandLogo, LinkReactRouter } from "@repo/ui";
import React from "react";
import { FooterLinks } from "./footerLinks/FooterLinks";

export function Footer(): JSX.Element {
    return (
        <div className=" w-full text-white">
            <div className="flex items-center w-full">
                <div className="flex items-center">
                    <BrandLogo bagFill="black" />
                </div>
                <div className="text-black pl-10 w-full">
                    <FooterLinks />
                </div>
            </div>
        </div>
    );
}
