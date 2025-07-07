
export interface NavigationProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

export interface Tab {
    id: number;
    icon: React.ElementType;
    title: string;
    component: any;
    href?: string;
}