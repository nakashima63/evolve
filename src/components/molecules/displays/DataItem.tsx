import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  size?: "12" | "6" | "4" | "3" | "2" | "1";
}

export const DataItem = ({ title, children, size = "12" }: Props) => {
  const sizeClass = `col-span-${size}`;

  return (
    <div className={`text-zinc-500 ${sizeClass}`}>
      <div className="font-bold pb-1">{title}</div>
      <div className="whitespace-pre-wrap">{children}</div>
    </div>
  );
};
