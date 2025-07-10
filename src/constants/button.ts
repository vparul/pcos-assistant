export const BUTTON_TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    OUTLINE: "outline",
    DELETE: "delete",
    GRADIENT: "gradient",
} as const;


export const ICON_PLACEMENT = {
    LEFT: "left",
    RIGHT: "right",
} as const;

export const BUTTON_SIZE = {
    SMALL: "sm",
    MEDIUM: "md",
    LARGE: "lg",
}


export type IconPlacement = typeof ICON_PLACEMENT[keyof typeof ICON_PLACEMENT];

export type ButtonTypes = typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES];

export type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];