import { ReactNode } from "react";

interface Props {
  action: (formData: FormData) => Promise<void>;
  children: ReactNode;
}

export const Form = ({ action, children }: Props) => {
  return (
    <form action={action} className="flex flex-col space-y-4">
      {children}
    </form>
  );
};
