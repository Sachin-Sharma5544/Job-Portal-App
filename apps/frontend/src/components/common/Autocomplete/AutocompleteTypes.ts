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
