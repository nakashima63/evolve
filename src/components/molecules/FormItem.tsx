import { ReactNode } from "react";

interface Props {
  formId: string;
  label: string;
  children: ReactNode;
  size?: "12" | "6" | "4" | "3" | "2" | "1";
}

export const FormItem = ({ children, formId, label, size = "12" }: Props) => {
  return (
    <div className={`text-zinc-500 col-span-${size}`}>
      <label htmlFor={formId} className="block">
        {label}
      </label>
      {children}
    </div>
  );
};
