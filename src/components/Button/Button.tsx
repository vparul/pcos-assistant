import {
  BUTTON_SIZE,
  BUTTON_TYPES,
  ICON_PLACEMENT,
} from "../../constants/button";
import type { ButtonProps } from "./types";

const Button = ({
  title,
  disabled,
  onClick,
  icon,
  iconPlacement,
  size,
  variant,
  className,
  children,
}: ButtonProps) => {
  const { SECONDARY, PRIMARY, OUTLINE } = BUTTON_TYPES;
  const { SMALL, LARGE } = BUTTON_SIZE;

  const getStyles = () => {
    switch (variant) {
      case PRIMARY:
        return "bg-blue-600 text-white border-blue-100 hover:bg-blue-700 transform hover:scale-105 hover:shadow-xl";
      case SECONDARY:
        return "bg-white text-blue-600 border-blue-600 hover:bg-blue-50";
      case OUTLINE:
        return "bg-white text-black border-1 border-gray-200 hover:bg-gray-100 transform hover:scale-105 hover:shadow-xl";
      default:
        return "bg-blue-600 text-white shadow-md";
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case SMALL:
        return "px-4 py-3 text-sm font-normal";
      case LARGE:
        return "p-8 text-xl font-bold";
      default:
        return " px-6 py-3 text-lg font-semibold";
    }
  };

  const Icon = icon;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center cursor-pointer shadow-lg
          text-lg transition-all duration-200 rounded-xl disabled:opacity-[0.5] disabled:text-gray-500 
          disabled:cursor-not-allowed disabled:transition-none disabled:scale-100 disabled:shadow-xs
          border border-solid ${getStyles()} ${getSizeStyle()} ${iconPlacement === ICON_PLACEMENT.LEFT ? "flex-row-reverse" : "flex-row"
        } ${className}`}
    >
      <span className="px-2">{title}</span>
      {Icon && <Icon size={size === SMALL ? 15 : 20} />}
      {children}
    </button>
  );
};

export default Button;
