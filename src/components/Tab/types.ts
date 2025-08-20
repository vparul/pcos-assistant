import type { JSX } from "react";

export interface ITabList {
    title: string;
    disabled?: boolean;
    icon?: React.ElementType;
    component?: JSX.Element;

}

export interface ITabProps {
    list: ITabList[];
    onClick: Function;
    selectedTab: string;
    className?: string;
}

