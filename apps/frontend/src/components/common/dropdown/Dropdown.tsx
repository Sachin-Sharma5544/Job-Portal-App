import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const StyledDropdown = styled(Select)({
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none", // Remove border
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none", // Remove border on hover as well
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none", // Remove border on focus
    },
});

const StyledSpan = styled("span")({
    color: "#a2a2a2",
});

interface DropdownProps {
    placeholder: string;
}

export const Dropdown = (props: DropdownProps): JSX.Element => {
    const [value, setValue] = useState<number | string>("");
    return (
        <StyledDropdown
            className="w-full"
            displayEmpty
            onChange={(e) => {
                setValue(e.target.value);
            }}
            renderValue={(selected) => {
                if (selected === "") {
                    return <StyledSpan>{props.placeholder}</StyledSpan>;
                }
                return selected;
            }}
            value={value}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </StyledDropdown>
    );
};
