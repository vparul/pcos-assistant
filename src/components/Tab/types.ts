export interface TabList {
    title: string;
    disabled?: boolean;
    icon?: React.ElementType;
    component?: React.ComponentType;

}

export interface TabProps {
    list: TabList[];
    onClick: Function;
    selectedTab: string;
    className?: string;
}