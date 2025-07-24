import type { CheckboxProps } from "./types";

export const Checkbox = ({
  label,
  value,
  onChange,
  selectedValues = [],
  disabled,
  className = "",
}: CheckboxProps) => {
  const checkboxId = `checkbox-${value}`;

  const handleOnChange = (value: string) => {
    let result = [];
    if (selectedValues?.includes(value)) {
      result = selectedValues?.filter((item) => item !== value);
    } else {
      result = [...selectedValues, value];
    }
    onChange(result);
  };

  return (
    <div
      className={`p-4 gap-2 flex items-center border-1 cursor-pointer border-gray-100 rounded-lg mb-2 ${className}`}
      onClick={() => handleOnChange(value)}
    >
      <input
        className="cursor-pointer"
        value={value}
        checked={selectedValues?.includes(value)}
        name="label"
        type="checkbox"
        readOnly
        disabled={disabled}
        id={checkboxId}
      />
      <label
        className="cursor-pointer font-medium text-gray-600 text-sm"
        htmlFor={checkboxId}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
