import { baseFieldClasses } from "../../styles/formStyles";
import type { TextProps } from "./types";

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  className,
}: TextProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={baseFieldClasses}
        type="text"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
