import type { ChangeEventHandler } from "react";

export interface NumberProps {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}
