import { ReactNode } from "react";

interface Props {
  formId: string;
  label: string;
  children: ReactNode;
}

export const FormItem = ({ children, formId, label }: Props) => {
  return (
    <div className="text-zinc-500">
      <label htmlFor={formId} className="block">
        {label}
      </label>
      {children}
    </div>
  );
};
