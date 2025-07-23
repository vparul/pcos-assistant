import type { RadioButtonProps } from "./types";

export const RadioButton = ({
  label,
  onChange,
  value,
  checked,
}: RadioButtonProps) => {
  return (
    <div
      className="p-4 gap-2 flex items-center border-1 cursor-pointer border-gray-100 rounded-lg mb-2"
      onClick={() => onChange(value)}
    >
      <input
        className="cursor-pointer"
        value={value}
        checked={checked}
        name="label"
        type="radio"
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

export default RadioButton;
