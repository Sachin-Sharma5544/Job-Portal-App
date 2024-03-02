import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

export const HomePage = (): JSX.Element => {
    const user = useAuthUser();
    console.log("Home page", user);
    return <div>HomePage</div>;
};
