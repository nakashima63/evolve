import { ReactNode } from "react";
import cn from "classnames";

interface Props {
  formId: string;
  label: string;
  children: ReactNode;
  size?: "12" | "6" | "4" | "3" | "2" | "1";
}

export const FormItem = ({ children, formId, label, size = "12" }: Props) => {
  const sizeClass = cn({
    "col-span-12": size === "12",
    "col-span-6": size === "6",
    "col-span-4": size === "4",
    "col-span-3": size === "3",
    "col-span-2": size === "2",
    "col-span-1": size === "1",
  });

  return (
    <div className={`text-zinc-500 ${sizeClass}`}>
      <label htmlFor={formId} className="block">
        {label}
      </label>
      {children}
    </div>
  );
};
