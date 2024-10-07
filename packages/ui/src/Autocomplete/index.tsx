import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

export interface TextFieldProps {
    border: string;
    hoverBorder: string;
    focusedBorder: string;
}
export interface AutocompleteProps {
    placeHolder: string;
    className?: string;
    displayLens?: boolean;
    border: TextFieldProps;
}

const options = ["Option 1", "Option 2"];

const StyledAutocomplete = styled(Autocomplete)({
    width: "100%",
    height: "100%",
    border: "black",
    "& .MuiAutocomplete-popupIndicator": {
        transform: "none", // Prevent the icon from rotating
    },
    "& .MuiAutocomplete-popupIndicatorOpen": {
        transform: "none", // Keep it from rotating when open
    },
});

const StyledSearchIcon = styled(SearchIcon)({
    color: "grey",
});

const StyledTextField = styled(TextField)<TextFieldProps>((property) => ({
    borderRadius: "16px",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: property.border,
            borderRadius: "8px",
        },
        "&:hover fieldset": {
            border: property.hoverBorder,
        },
        "&.Mui-focused fieldset": {
            border: property.focusedBorder,
        },
    },
}));

export function AutoCompleteComponent(props: AutocompleteProps): JSX.Element {
    const [value, setValue] = React.useState<unknown>(null);
    const [inputValue, setInputValue] = React.useState("");

    return (
        <StyledAutocomplete
            id="controllable-states-demo"
            inputValue={inputValue}
            onChange={(event: any, newValue: unknown) => {
                setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            options={options}
            popupIcon={props.displayLens ? <StyledSearchIcon /> : null}
            renderInput={(params) => {
                return (
                    <StyledTextField
                        {...params}
                        border={props.border.border}
                        focusedBorder={props.border.focusedBorder}
                        hoverBorder={props.border.hoverBorder}
                        placeholder={props.placeHolder}
                    />
                );
            }}
            value={value}
        />
    );
}
