import type { ChangeEventHandler } from "react";

export interface TextAreaProps {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  value?: string;
}
