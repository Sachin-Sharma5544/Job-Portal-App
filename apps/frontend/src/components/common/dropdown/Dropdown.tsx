import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { type TextFieldProps, type DropdownProps } from "../PropertyTypes";

const StyledDropdown = styled(Select)<TextFieldProps>((property) => ({
    backgroundColor: "White",
    height: "100%",
    "& .MuiOutlinedInput-notchedOutline": {
        border: property.border, // Remove border
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: property.hoverBorder, // Remove border on hover as well
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: property.focusedBorder, // Remove border on focus
    },
}));

const StyledSpan = styled("span")({
    color: "#a2a2a2",
});

export const Dropdown = (props: DropdownProps): JSX.Element => {
    const [value, setValue] = useState<number | string>("");
    return (
        <StyledDropdown
            border={props.border.border}
            className="w-full"
            displayEmpty
            focusedBorder={props.border.focusedBorder}
            hoverBorder={props.border.hoverBorder}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            renderValue={(selected) => {
                if (selected === "") {
                    return <StyledSpan>{props.placeHolder}</StyledSpan>;
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
