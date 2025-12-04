import type { ChangeEventHandler } from "react";

export interface DatePickerProps {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}
