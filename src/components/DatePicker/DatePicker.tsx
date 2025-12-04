import { baseFieldClasses } from "../../styles/formStyles";
import type { DatePickerProps } from "./types";

const DatePicker = ({
  name,
  label,
  onChange,
  placeholder,
  className,
}: DatePickerProps) => {
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
        type="date"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DatePicker;
