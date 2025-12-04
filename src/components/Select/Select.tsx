import type { SelectProps } from "./types";
import { baseFieldClasses } from "../../styles/formStyles.ts";

const Select = ({ label, name, options, onChange, className }: SelectProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className={baseFieldClasses}
        name={name}
        id={name}
        onChange={onChange}
      >
        {options.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
