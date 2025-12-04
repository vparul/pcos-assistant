import type { ChangeEventHandler } from "react";

interface IOption {
  id: string;
  label: string;
  value: string;
}
export interface SelectProps {
  label: string;
  name: string;
  options: Array<IOption>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
}
