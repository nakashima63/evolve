import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="w-full max-w-[832px] mx-auto px-4">{children}</div>;
};
