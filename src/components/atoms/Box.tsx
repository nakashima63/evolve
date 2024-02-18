import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Box = ({ children }: Props) => {
  return (
    <div className="border border-green-600 border-solid rounded-md p-4 mt-4 grid grid-cols-12 gap-4">
      {children}
    </div>
  );
};
