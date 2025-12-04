import type { ChangeEventHandler } from "react";

export interface TextProps {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}
