import { DropdownMenuItem as DropdownMenuItemShadcn } from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DropdownMenuItem = ({ children }: Props) => {
  return <DropdownMenuItemShadcn>{children}</DropdownMenuItemShadcn>;
};
