import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

interface AutocompleteProps {
    placeHolder: string;
    className?: string;
    displayLens?: boolean;
}

const options = ["Option 1", "Option 2"];

const StyledAutocomplete = styled(Autocomplete)({
    width: "100%",
    height: "100%",
    border: "white",
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

const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            border: "none",
        },
        "&:hover fieldset": {
            border: "none",
        },
        "&.Mui-focused fieldset": {
            border: "none",
        },
    },
});

export default function AutoCompleteComponent(
    props: AutocompleteProps
): JSX.Element {
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState("");

    return (
        <StyledAutocomplete
            id="controllable-states-demo"
            inputValue={inputValue}
            onChange={(event: any, newValue: string | null) => {
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
                        placeholder={props.placeHolder}
                    />
                );
            }}
            value={value}
        />
    );
}
