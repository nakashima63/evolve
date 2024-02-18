import { ReactNode } from "react";
import { DropdownMenuContent as DropdownMenuContentShadcn } from "@/components/ui/dropdown-menu";

interface Props {
  children: ReactNode;
}

export const DropdownMenuContent = ({ children }: Props) => {
  return <DropdownMenuContentShadcn>{children}</DropdownMenuContentShadcn>;
};
