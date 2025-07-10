import { BUTTON_TYPES, ICON_PLACEMENT } from "../../constants/button";
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
  const { SECONDARY, PRIMARY } = BUTTON_TYPES;

  const getStyles = () => {
    switch (variant) {
      case PRIMARY:
        return "bg-blue-600 text-white border-blue-100 hover:bg-blue-700 transform hover:scale-105 hover:shadow-xl";
      case SECONDARY:
        return "bg-white text-blue-600 border-blue-600 hover:bg-blue-50";
      default:
        return "bg-blue-600 text-white shadow-md";
    }
  };

  const Icon = icon;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center cursor-pointer shadow-lg
         font-semibold text-lg transition-all duration-200 rounded-xl px-6 py-3
          border border-solid ${getStyles()} ${
        iconPlacement === ICON_PLACEMENT.LEFT ? "flex-row-reverse" : "flex-row"
      } ${className}`}
    >
      <span className="px-2">{title}</span>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default Button;
