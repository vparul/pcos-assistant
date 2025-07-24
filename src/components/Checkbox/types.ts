export interface CheckboxProps {
    label: string;
    value: string;
    checked: boolean;
    onChange : Function;
    selectedValues: Array<string>;
    disabled?: boolean;
    className?: string;

}