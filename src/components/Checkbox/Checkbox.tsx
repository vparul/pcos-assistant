import type { CheckboxProps } from "./types";

export const Checkbox = ({
  label,
  value,
  onChange,
  selectedValues = [],
}: CheckboxProps) => {
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
      className="p-4 gap-2 flex items-center border-1 cursor-pointer border-gray-100 rounded-lg mb-2"
      onClick={() => handleOnChange(value)}
    >
      <input
        className="cursor-pointer"
        value={value}
        checked={selectedValues?.includes(value)}
        name="label"
        type="checkbox"
      />
      <label
        className="cursor-pointer font-medium text-gray-600 text-sm"
        htmlFor="label"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
