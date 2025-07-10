import { type ButtonSize, type ButtonTypes, type IconPlacement } from "../../constants/button";


export interface ButtonProps {
    title: string;
    disabled?: boolean;
    onClick: () => void;
    icon?: React.ElementType;
    iconPlacement?: IconPlacement;
    className?: string;
    children?: React.ReactNode;
    variant: ButtonTypes;
    size: ButtonSize;


}