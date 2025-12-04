import { baseFieldClasses } from "../../styles/formStyles";
import type { TextAreaProps } from "./types";

export const TextArea = ({
  maxLength,
  minLength,
  name,
  value,
  placeholder,
  onChange,
  label,
  className,
}: TextAreaProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        className={baseFieldClasses}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};
