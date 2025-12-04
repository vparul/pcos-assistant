import { baseFieldClasses } from "../../styles/formStyles";
import type { NumberProps } from "./types";

const NumberInput = ({
  name,
  label,
  onChange,
  placeholder,
  className,
}: NumberProps) => {
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
        type="number"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default NumberInput;
