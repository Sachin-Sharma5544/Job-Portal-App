import React, { isValidElement } from "react";
import { styled } from "@mui/material/styles";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

export interface DropdownFieldProps {
    border: string;
    hoverBorder: string;
    focusedBorder: string;
}
export interface DropdownProps {
    placeHolder: string;
    className?: string;
    border: DropdownFieldProps;
    menuoptions?: () => React.ReactNode;
    value?: unknown;
    handleDropdownChange: (a: SelectChangeEvent<unknown>) => void;
}

const StyledDropdown = styled(Select)<DropdownFieldProps>((property) => ({
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

export function Dropdown(props: DropdownProps): JSX.Element {
    return (
        <StyledDropdown
            border={props.border.border}
            className="w-full"
            displayEmpty
            focusedBorder={props.border.focusedBorder}
            hoverBorder={props.border.hoverBorder}
            onChange={(e) => {
                props.handleDropdownChange(e);
            }}
            renderValue={(selected: unknown): JSX.Element | string => {
                if (typeof selected === "string") {
                    if (selected === "") {
                        return <StyledSpan>{props.placeHolder}</StyledSpan>;
                    }
                    return selected; // `selected` is confirmed as a string
                }

                // If selected is JSX.Element
                if (isValidElement(selected)) {
                    return selected; // Handle JSX.Element here
                }

                // Default case, return empty string or some fallback
                return "";
            }}
            value={props.value}
        >
            {props.menuoptions ? props.menuoptions() : null}
        </StyledDropdown>
    );
}
